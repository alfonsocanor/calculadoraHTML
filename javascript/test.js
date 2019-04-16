import { expect } from 'chai';
import { prueba } from '../javascript/main.js'
describe('hola mundo', () => {
    it('should do somethind', () => {
        expect(prueba(1).to.eql('1'));
    })
});