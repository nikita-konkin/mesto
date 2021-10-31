export class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    _clear() {

        this._container.innerHTML = '';

    }

    addItem(element) {

        this._container.prepend(element);

    }

    renderer(items) {

        this._clear();
        items.forEach(item => {
            this._renderer(item);
        });

    }

    rendererAdditionalCard(data) {

        this._renderer(data);

    }

}