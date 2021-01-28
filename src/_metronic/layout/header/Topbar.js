import React from "react";
import UserProfile from "../../../app/partials/layout/UserProfile";
import * as utils from "../../../_metronic/utils/utils";


export default class Topbar extends React.Component {

    render() {
        return (
            <div className="kt-header__topbar">
                <UserProfile user={utils.getStorage('auth')} showAvatar={false} showHi={true} showBadge={false}/>
            </div>
        );
    }
}
