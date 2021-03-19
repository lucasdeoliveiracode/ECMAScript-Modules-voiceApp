export default class Media {
    async getAudio() {
        //retorna o áudio do usuário
        return navigator.mediaDevices.getUserMedia({
            audio: true
        })
    }
}