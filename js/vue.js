new Vue({
    el:'#article_vue',
    data:{
        preg_1:'',
        estado1:false,
        estado2:false,
        estado3:false,
        estado0:false,
        resultados_block1:false,
        resultados_block2:false,
        resultados_block3:false,
        anios_prog:'',
        motv_prog:'',
        exp_prog:'',
        lng_prog:'',
        lngs_prog:[],
    },
    methods:{
        validar_preg1:function(){
            if(this.preg_1=="Si"){
                this.estado0=false
                this.estado1=!this.estado1
            }
            else if(this.preg_1=="No"){
                this.estado1=false
                this.estado2=false
                this.estado3=false
                this.resultados_block1=false
                this.resultados_block2=false
                this.resultados_block3=false
                this.estado0=!this.estado0
            }
        },     
        validaranios:function(){
            var a_p=parseInt(this.anios_prog)
            if(a_p==1){
                this.estado3=false
                this.estado2=!this.estado2
            }
            else if(a_p>=2){
                this.estado2=false
                this.estado3=!this.estado3
            }
        },
        agregar_Lng:function(){
            this.lngs_prog.push(this.lng_prog);
            this.lng_prog='';
        },
        resultados:function(){
            var a_p_r=parseInt(this.anios_prog)
            if(this.preg_1='Si' && a_p_r==1){
                this.resultados_block1=!this.resultados_block1
                this.resultados_block2=!this.resultados_block2
            }
            else if(this.preg_1='Si' && a_p_r>=2){
                this.resultados_block2=false
                this.resultados_block1=!this.resultados_block1
                this.resultados_block3=!this.resultados_block3
            }
        }
    }
});
new Vue({
    el:'#article_vue2',
    data:{
        articulos:[
        {cant:5,nombre:'Proteína Muscletech',precio_unit:869,precio_items:0},
        {cant:2,nombre:'Burst BodyPerformance',precio_unit:349,precio_items:0}
        ],
        subtotal:0,
        iva:0,
        iva_porcentaje:.15,
        total:0,
    },
    methods:{
        calculoPrecioItems(item){
            item.precio_items=item.cant*item.precio_unit;
            return item.precio_items;
        },
        agregarArt(){
            this.articulos.push({
                cant:'',
                nombre:"",
                precio_unit:'',
                precio_items:''
            })
        }
    },
    computed:{
        Subtotal(){
            this.total=0;
            for(objeto of this.articulos){
                this.total+=objeto.precio_items;
            }
            this.iva=this.total*this.iva_porcentaje;
            this.subtotal=this.total-this.iva;
            return this.subtotal
        },
        Iva(){
            this.total=0;
            for(objeto of this.articulos){
                this.total+=objeto.precio_items;
            }
            this.iva=this.total*this.iva_porcentaje;
            return this.iva.toFixed(2) 
        },
        TotalPrecio(){
            this.total=0;
            for(objeto of this.articulos){
                this.total+=objeto.precio_items;
            }
            return this.total
        }
    }
});