
export class Section{
	constructor({ data, renderer }, containerSelector){
		this._item = data;
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
	}

	_clear(){

		this._container.innerHTML = '';

	}

	addItem(element){

		this._container.prepend(element);

	}

	renderer(){

		this._clear();

		this._item.forEach(item =>{
			this._renderer(item);
		});

	}

	rendererAdditionalCard(data){

		this._renderer(data);
		
	}

}