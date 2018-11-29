import {isObservableMap} from 'mobx';
import ObservableNestedMap from './';

const arr = [1, 2, 3];
const obj = {
	prop1: 'prop1'
};

const map = new ObservableNestedMap({
	arr,
	obj
});
test('observable-nested-map', () => {
	expect(map.get('obj.prop1')).toBe(obj.prop1);
	expect(map.get('obj.prop2')).toBe(undefined);
	expect(isObservableMap(map.get('obj'))).toBe(true);
	map.set('obj2', obj);
	expect(isObservableMap(map.get('obj2'))).toBe(true);

});



