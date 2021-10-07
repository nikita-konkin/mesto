
export class Section{
	constructor({ data, renderer }, containerSelector){
		this._item = data;
		this._renderer = renderer;
		this._containerSelector = document.querySelector(containerSelector);
	}

	_clear(){
		this._containerSelector.innerHTML = '';
	}

	addItem(element){
		this._containerSelector.prepend(element);
	}

	renderer(){
		this._clear();

		this._item.forEach(item =>{
			this._renderer(item);
		});

	}

}