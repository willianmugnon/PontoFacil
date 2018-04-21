
export abstract class AbstractEntity {

	protected _id: number;
	
	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}


}
