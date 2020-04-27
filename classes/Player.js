class Player {
    constructor() {
        this.name = null;
    }

    static initForm() {
        this.title = createElement("h1");
        this.button = createButton("Submit");
        this.nameInput = createInput("Name");
        this.greeter = createElement("h2");
        this.form = [this.title, this.button, this.nameInput];
    }

    static hideForm() {
        this.form.forEach(formElement => formElement.hide());
    }

    static showForm() {
        this.title.html("Hurdles Game");
        this.title.position(windowWidth / 2 - 100, 0);

        this.nameInput.position(windowWidth / 2 - 85, windowWidth / 10);
        this.button.position(windowWidth / 2 - 35, (windowWidth / 10) + 30);

        this.button.mousePressed(() => {
            player.name = this.nameInput.value();
            Player.hideForm();
            this.greeter.html(`Hello, ${player.name}!`);
            this.greeter.position(windowWidth / 2 - 85, windowWidth / 10);
        })
    }

    update(name, distance) {

    }
}
