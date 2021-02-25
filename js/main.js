new Vue({
    el: '#app',
    data: {
        rotar: false,
        nombreFalso: 'Pedro Perez',
        nombre:[],
        numFalso: '0000',
        numTarjeta: [],
        numTarjeta1: [],
        numTarjeta2: [],
        numTarjeta3: [],
        mesFalso:'MM',
        anyoFalso:'AA',
        mes:[],
        anyo:[],
        ccvFalso: '000',
        ccv:[],
    },
    methods: {
        rotarTarjeta: function() {
            this.rotar = !this.rotar
        },
        numeroUno: function () {
             if (this.numTarjeta.length === 0) {
                 return this.numFalso;
             } else {
                 return this.numTarjeta = this.numTarjeta;
             }
        },
        numeroDos: function () {
            if (this.numTarjeta1.length === 0) {
                return this.numFalso;
            } else {
                return this.numTarjeta1 = this.numTarjeta1;
            }
        },
        numeroTres: function () {
             if (this.numTarjeta2.length === 0) {
                 return this.numFalso;
             } else {
                 return this.numTarjeta2 = this.numTarjeta2;
             }
        },
        numeroCuatro: function () {
            if (this.numTarjeta3.length === 0) {
                return this.numFalso;
            } else {
                return this.numTarjeta3 = this.numTarjeta3;
            }
        },
        mesFiltrado: function () {
             if (this.mes.length === 0) {
                 return this.mesFalso;
             } else {
                 return this.mes = this.mes;
             }
        },
        anyoFiltrado: function () {
             if (this.anyo.length === 0) {
                 return this.anyoFalso;
             } else {
                 return this.anyo = this.anyo;
             }
        },
        nombreFiltrado: function () {
             if (this.nombre.length === 0) {
                 return this.nombreFalso;
             } else {
                 return this.nombre = this.nombre;
             }
        },
        ccvFiltrado: function () {
             if (this.ccv.length === 0) {
                 return this.ccvFalso;
             } else {
                 return this.ccv = this.ccv;
             }
        },
        },
    })