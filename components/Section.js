
export class Section{
	constructor({ data, renderer }, containerSelector){
		this._item = data;
		this._renderer = renderer;
		this.Selector = document.querySelector(containerSelector);
	}

	_clear(){

		this.Selector.innerHTML = '';

	}

	addItem(element){

		this.Selector.prepend(element);

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