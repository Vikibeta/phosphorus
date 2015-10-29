//author @huntbao
'use strict'

import AppConstants from '../constants/constants'
import AppDispatcher from '../dispatcher/dispatcher'

let ReqTabConAction = {

    addCon() {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_CONTENT_ADD
        })
    },

    removeCon(tabIndex) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_CONTENT_REMOVE,
            tabIndex: tabIndex
        })
    },

    toggleMethodList(tabIndex) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_CONTENT_TOGGLE_METHODS_LIST,
            tabIndex: tabIndex
        })
    },

    changeMethod(tabIndex) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_CONTENT_CHANGE_METHOD,
            tabIndex: tabIndex
        })
    },

    fillURLParams(tabIndex) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_CONTENT_FILL_URL_PARAMS,
            tabIndex: tabIndex
        })
    },

    toggleURLParamsKV(tabIndex, rowIndex) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_URL_PARAMS_TOGGLE_KV,
            tabIndex: tabIndex,
            rowIndex: rowIndex
        })
    },

    addURLParamsKV(tabIndex) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_URL_PARAMS_ADD_KV,
            tabIndex: tabIndex
        })
    },

    removeURLParamsKV(tabIndex, rowIndex) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_URL_PARAMS_REMOVE_KV,
            tabIndex: tabIndex,
            rowIndex: rowIndex
        })
    },

    editURLParamsKV(tabIndex) {
        //todo, bulk edit
    },

    changeURLParamsKVKey(tabIndex, rowIndex, value) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_URL_PARAMS_CHANGE_KV_KEY,
            tabIndex: tabIndex,
            rowIndex: rowIndex,
            value: value
        })
    },

    changeURLParamsKVValue(tabIndex, rowIndex, value) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_URL_PARAMS_CHANGE_KV_VALUE,
            tabIndex: tabIndex,
            rowIndex: rowIndex,
            value: value
        })
    },

    switchBuilderTab(tabIndex, activeTabName) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REQ_BUILDER_SWITCH_TAB,
            tabIndex: tabIndex,
            activeTabName: activeTabName
        })
    }

}

export default ReqTabConAction
