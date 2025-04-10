import Component from "../components/Component";
import ArrayCollection from "../primitive/ArrayCollection";
import Scene from "../core/Scene";

export default class GameObject {
    private _name: string;
    private _id: number;
    private _components:ArrayCollection<Component> = new ArrayCollection<Component>();
    private _parent:GameObject = null;
    private _scene:Scene = null;
    private _children:ArrayCollection<GameObject> = new ArrayCollection<GameObject>();

    constructor(name: string, id: number, scene: Scene) {
        this._name = name;
        this._id = id;
        this._scene = scene;
    }

    get name(): string {
        return this._name;
    }

    get id(): number {
        return this._id;
    }

    get components(): ArrayCollection<Component> {
        return this._components;
    }

    get parent(): GameObject {
        return this._parent;
    }

    set parent(value: GameObject) {
        this._parent = value;
    }

    get scene(): Scene {
        return this._scene;
    }

    get children(): ArrayCollection<GameObject> {
        return this._children;
    }

    update(): void {
        for (const component of this._components) {
            component.update();
        }
    }

    destroy(): void {
        for (const component of this._components) {
            component.destroy();
        }
        this._components.clear();
    }
}