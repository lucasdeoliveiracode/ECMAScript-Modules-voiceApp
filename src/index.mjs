import Controller from "./controller.mjs";
import Media from "./util/media.js";
import Recorder from "./util/recorder.mjs";
import View from "./view.mjs";

const view = new View()
const media = new Media()
const recorder = new Recorder()

//não precisa de new pq é static
Controller.initialize({
    //passar as dependencies
    view,
    media,
    recorder
})