import {
 
  HIDE_ALERT,
  ADVANCE_TOTAL_VALUE,
  GROUP_TOTAL_VALUE,
  TOTAL_COST_VALUE,
  ADVANCE_PRICE_INPUT_VALUE,
  GROUP_PRICE_INPUT_VALUE,
  INCREMENT_ADVANCE_VALUE,
  DECREMENT_ADVANCE_VALUE,
  INCREMENT_GROUP_VALUE,
  DECREMENT_GROUP_VALUE,
  SELECTED_TICKETS,
  HIDE_PAYMENT_PAGE,
  DISPLAY_PROCESSING_FEE,
  HIDE_PROCESSING_FEE,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  EMPTY_VALUES_ALERT,
  LOGOUT_USER,
  ONE_TICKET_ALERT,
  LOGIN_ALERT,
  REGISTER_ALERT
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === EMPTY_VALUES_ALERT) {
     return {
       ...state,
       showAlert: true,
       alertType: "danger",
       alertText: "please fill all credentials",
     };
  }
    if (action.type === ONE_TICKET_ALERT) {
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "please select atleast one ticket to proceed",
      };
    }
   if (action.type === REGISTER_ALERT) {
     return {
       ...state,
       showAlert: true,
       alertType: "success",
       alertText: "User Created! Redirecting...",
     };
   }
   if (action.type === LOGIN_ALERT) {
     return {
       ...state,
       showAlert: true,
       alertType: "success",
       alertText: "logging in...",
     };
   }
  
    if (action.type === HIDE_ALERT) {
      return {
        ...state,
        showAlert: false,
        alertText: "",
        alertType: "",
      };
    }
    if (action.type === ADVANCE_TOTAL_VALUE) {
        return {
            ...state,  advanceTotal: action.payload,
        }
    }
    if (action.type === GROUP_TOTAL_VALUE) {
        return {
          ...state,
          groupTotal: action.payload
        };
    } 
    if (action.type === TOTAL_COST_VALUE) {
        return {
            ...state, totalCost:action.payload
        }
    }
    if (action.type === ADVANCE_PRICE_INPUT_VALUE) {
        return {
          ...state,
          advancePriceInput:action.payload
        };
    }
    if ((action.type === GROUP_PRICE_INPUT_VALUE)) {
        return {
          ...state,
          groupPriceInput : action.payload
        };
    }
      if (action.type === INCREMENT_ADVANCE_VALUE) {
        return {
          ...state,
          advancePriceInput: action.payload,
        };
      }
    if (action.type === DECREMENT_ADVANCE_VALUE) {
        return {
          ...state,
          advancePriceInput: action.payload,
        };
    }
    if (action.type === INCREMENT_GROUP_VALUE) {
        return {
          ...state,
          groupPriceInput: action.payload
        };
    }
    if (action.type === DECREMENT_GROUP_VALUE) {
        return {
          ...state,
          groupPriceInput: action.payload,
        };
    }
  if (action.type === SELECTED_TICKETS) {
    return {
      ...state,
      toggleNavigate: true,
      isLoading: true, 
      ticketToPay: [...state.ticketToPay, action.payload],
    };
  }
  if (action.type === HIDE_PAYMENT_PAGE) {
    return {
      ...state,
      toggleNavigate: false,
    }
  } 
  if (action.type === DISPLAY_PROCESSING_FEE) {
    return {
      ...state,
      masterCard: true,
      ProcessingFee:action.payload,
    };
  }
    if (action.type === HIDE_PROCESSING_FEE) {
      return {
        ...state,
        masterCard:false,                                                           
        ProcessingFee: action.payload,
      };
    }
  
  if (action.type === REGISTER_USER_BEGIN) {
    return {...state, isLoading: true}
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
    }
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
    }
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return {...state, isLoading: true}
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
  }
  }
    
    throw new Error(`no action of type ${action.type}`);
    
}

export default reducer;