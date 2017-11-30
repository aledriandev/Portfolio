import store from '../store/store'

export function selectSectionAction(label) {
    console.log('label', label);
    store.setState({
       selectedSection: label
    });
}

export function addAution1(price, index) {
    console.log('new price', price);
    console.log('ruta','tipo/mecanica/'+index+'/precio_subasta')
    database.ref('tipo/mecanica/'+index+'/precio_subasta').set(price);
}

export function addAution(price, index) {
    console.log('new price', price);
    console.log('ruta','tipo/mecanica/'+index+'/precio_subasta')
    database.ref('tipo/mecanica/'+index+'/precio_subasta').once('value').then(res => {
        console.log('res-addAution', res.val());
        const valuePrice = res.val();
        console.log('suma', parseInt(valuePrice) + price);
        const suma = parseInt(valuePrice) + price;
        
        database.ref('tipo/mecanica/'+index+'/precio_subasta').set(suma)
    });
}

