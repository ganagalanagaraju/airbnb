import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    updateWishlistStatus() {
        console.log(this.element.dataset.status)
        if(this.element.dataset.status === "false"){
            this.element.classList.remove("fill-none")
            this.element.classList.add("fill-primary")
            this.element.dataset.status = "true";
        }else{
            this.element.classList.add("fill-none");
            this.element.classList.remove("fill-primary");
            this.element.dataset.status = "false";
        }
    }
}
