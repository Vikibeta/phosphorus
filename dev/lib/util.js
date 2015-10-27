//author @huntbao
'use strict'

import URL from 'url'
import QueryString from 'querystring'

const DEFAULT_PATH_VARIABLE_PLACEHOLDER = 'Path Variable Key'
const pathVariableExp = new RegExp('/:(\\w+?[^/]*)', 'g')
//const queryExp = new RegExp('(\\w+)=(\\w+)|(\\w+)=*|=*(\\w+)', 'g')

let Util = {
    getUrlParams(url) {
        let params = []
        if (!url) return params
        let result = URL.parse(url)
        let ret
        if (result.pathname) {
            // 'you/:id/:path/update'
            while ((ret = pathVariableExp.exec(result.pathname)) != null) {
                params.push({
                    keyPlaceholder: DEFAULT_PATH_VARIABLE_PLACEHOLDER,
                    pathVariable: true, // can't change key, readonly flag
                    key: ret[1]
                })
            }
        }
        if (result.query) {
            //// '&name=hello&name=&=hello'
            //while ((ret = queryExp.exec(result.query)) != null) {
            //    if (ret[1]) {
            //        // key and value: `name=hello`
            //        params.push({
            //            key: ret[1],
            //            value: ret[2]
            //        })
            //    } else if (ret[3]) {
            //        // only key: `name=`
            //        params.push({
            //            key: ret[3],
            //            value: ''
            //        })
            //    } else if (ret[4]) {
            //        // only value: `=hello`
            //        params.push({
            //            key: '',
            //            value: ret[4]
            //        })
            //    }
            //}
            // use QueryString
            let queryParts = QueryString.parse(result.query)
            for (let p in queryParts) {
                if (Array.isArray(queryParts[p])) {
                    queryParts[p].forEach((qp) => {
                        params.push({
                            key: p,
                            value: qp
                        })
                    })
                } else {
                    params.push({
                        key: p,
                        value: queryParts[p]
                    })
                }
            }
        }
        return params
    },

    setUrlQuery(url, params) {
        let result = URL.parse(url)
        result.search = '' // URL.format: query (object; see querystring) will only be used if search is absent.
        result.query = this.getQuery(params)
        return URL.format(result)
    },

    getQuery(params) {
        let query = {}
        params.map((param, index) => {
            if (param.pathVariable) return
            if (!param.key && !param.value) return
            if (!query[param.key]) {
                query[param.key]= []
            }
            query[param.key].push(param.value||'')
        })
        return query
    }
}

export default Util