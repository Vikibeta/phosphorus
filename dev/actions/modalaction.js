//author @huntbao
'use strict'

import AppConstants from '../constants/constants'
import AppDispatcher from '../dispatcher/dispatcher'

class ModalAction  {

    static closeModal() {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_CLOSE
        })
    }

    static openModal() {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_OPEN
        })
    }

    static openEditCollHostModal(collection) {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_EDIT_COLL_HOST,
            collection: collection
        })
    }

}

export default ModalAction
