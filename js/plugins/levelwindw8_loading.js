﻿(function() {



Scene_Load.prototype.onLoadSuccess = function() {
    SoundManager.playLoad();
    $gameWeight = false;
    $gameSwitches.setValue(212, true)
    this.fadeOutAll();
    this.reloadMapIfUpdated();
    SceneManager.goto(Scene_Map);
    this._loadSuccess = true;
};


})();
