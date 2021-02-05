import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {takeLatest} from "redux-saga/effects";

export const states = state => {
    return { image: state.detect.image }
}

export const actionTypes = {
    DetectImage: "[DetectImage] Action"
};

const initialDetectState = {
    info: undefined,
    image: undefined
};

export const reducer = persistReducer(
    {storage, key: "detect", whitelist: ["info", "image"]},
    (state = initialDetectState, action) => {
        switch (action.type) {
            case actionTypes.DetectImage: {
                const image = action.payload;
                return {...state, image: image};
            }

            default:
                return state;
        }
    }
);

export const actions = {
    DetectImage: image => ({type: actionTypes.DetectImage, payload: image}),
};

export function* saga() {
    yield takeLatest(actionTypes.DetectImage, function* DetectImageSaga() {});

}
