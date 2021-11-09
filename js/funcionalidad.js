document.getElementById('temas').addEventListener("change",temaSeleccionado);
function temaSeleccionado(){
    document.getElementById("numcaj").value=null;
    document.getElementById("colorcaj").value=null;
    capas=document.getElementsByTagName("article");
    for(i=0; i<capas.length;i++){
        capas[i].style.display="none";
    }
    var articulo=document.getElementById("temas").value;
    if(articulo!=null){
        document.getElementById("bienv").style.display="none";
        document.getElementById("mostrarresultados").style.display="none";
    }
    document.getElementById(articulo).style.display="block";
}
function mostrarCajas(){
    var numcajas=parseInt(document.getElementById("numcaj").value);
    var colorcaj=document.getElementById("colorcaj").value;
    var tipoborde=document.getElementById("tipoborde").value
    for(i=0; i<numcajas; i++){
        var mostrar= document.getElementById("mostrarcajas")
        var caj=document.createElement("div");
        caj.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp";
        caj.style.display="inline-block";
        caj.style.margin="8px 8px";
        switch (colorcaj){
            case 'ro': caj.style.backgroundColor='red';
                break;
            case 'az': caj.style.backgroundColor='blue';
                break;
            case 'am': caj.style.backgroundColor='yellow';
                break;
            case 've': caj.style.backgroundColor='green';
                break;   
            case 'vi': caj.style.backgroundColor='violet';
                break;
        }
        switch (tipoborde){
            case 'so': caj.style.border='solid';
                break;
            case 'pu': caj.style.border='dotted';
                break;
            case 'li': caj.style.border='dashed';
                break;
            case 'do': caj.style.border='double';
                break;
        }
        mostrar.appendChild(caj);
    }
}
function mostrarResultados(){
    document.getElementById("preguntas_encuesta").style.display="none";
    document.getElementById("mostrarresultados").style.display="block";
    document.getElementById("titulo_resp").innerHTML="Aquí se muestran tus respuestas<br>";
    var preg_1="1)¿Qué tipo de videojuegos prefiere?";
    var resp_1=document.getElementById("resp_1").value;
    var preg_2="2)¿Cuántas horas a la semana juega videojuegos?";
    var resp_2=document.getElementById("resp_2").value;
    var preg_3="3)¿Qué sistema de videojuegos prefiere?";
    var resp_3=document.getElementById("resp_3").value;
    var preg_4="4)¿Con quién prefiere jugar videojuegos?";
    var resp_4=document.getElementById("resp_4").value;
    var preg_5="5)¿Cuánto dinero gasta al mes en videojuegos?";
    var resp_5=document.getElementById("resp_5").value;
    document.getElementById("pr1").innerHTML=preg_1+"<br>"+resp_1;
    document.getElementById("pr2").innerHTML=preg_2+"<br>"+resp_2;
    document.getElementById("pr3").innerHTML=preg_3+"<br>"+resp_3;
    document.getElementById("pr4").innerHTML=preg_4+"<br>"+resp_4;
    document.getElementById("pr5").innerHTML=preg_5+"<br>"+resp_5;
}

document.getElementById('reservacion').addEventListener("change",function(){mesas();});
document.getElementById('mostrar').addEventListener("click",function(){mostrar();});

let mesas=function(){
    let nm=document.getElementById('reservacion').value;
    let contenido='';
    for(i=0; i<nm; i++){
        contenido+='<h3>mesa: '+(i+1)+'</h3>'+
        '<h4>Número de comensales</h4>'+
        'Adultos: <input type="text" name="adultos" id="adultos'+i+'"/><br>'+
        'Menores: <input type="text" name="menores" id="menores'+i+'"/><br><hr>';
    }
    document.getElementById("mesas").innerHTML=contenido;
}

let mostrar=function(){
    let mesas=document.getElementById("mesas").innerHTML;
    localStorage.setItem('mesa',mesas);
    let cAdultos=document.getElementsByName("adultos");
    let vAdultos=[];
    for (let i=0; i<cAdultos.length; i++){
        vAdultos[i]=cAdultos[i].value;
        localStorage.setItem('vAdultos', vAdultos);
    }
    let cMenores=document.getElementsByName("menores");
    let vMenores=[];
    for (let i=0; i<cMenores.length; i++){
        vMenores[i]=cMenores[i].value;
        localStorage.setItem('vMenores', vMenores);
    }
    window.open("DatosReservacion.html");
}
document.getElementById('tipo_tar').addEventListener("change",tipoTarSeleccionado);
document.getElementById('bcg_col').addEventListener("change",colorFondo);
document.getElementById('mostrar_tarfel').addEventListener("click",function(){mostrarTarjeta();});

function tipoTarSeleccionado(){
    capasImg=document.getElementsByName("tar_img");
    for(i=0; i<capasImg.length;i++){
        capasImg[i].style.display="none";
    }
    var imgtarjeta=document.getElementById("tipo_tar").value;
    document.getElementById(imgtarjeta).style.display="block";
}
var imgTarjeta=function(nombreFoto){
    document.getElementById("Vista_Previa").src="img/"+nombreFoto+".png";
    let img_trj=document.getElementById("Vista_Previa_Img").innerHTML;
    localStorage.setItem('img_trj',img_trj);
}

function colorFondo(){
    var bcg_col=document.getElementById('bcg_col').value;
    document.getElementById('VistaPrevia').style.backgroundColor=bcg_col;
    localStorage.setItem('bcg_color',bcg_col);
}

function nombreEnvia(){
    var nom_e=document.getElementById('nombre_envia').value;
    var nom_e_color=document.getElementById('color_nombre_envía').value;
    document.getElementById('nombre_envia_texto').innerHTML=nom_e;
    document.getElementById('nombre_envia_texto').style.color=nom_e_color;
    document.getElementById('nombre_envia_texto').style.fontSize="40px";
    document.getElementById('nombre_envia_texto').style.fontFamily= "'Brush Script MT', cursive";
    localStorage.setItem('nom_e',nom_e);
    localStorage.setItem('nom_e_color',nom_e_color);
}

function saludoTexto(){
    var sal_tex=document.getElementById('saludo').value;
    var sal_tex_color=document.getElementById('color_saludo').value;
    document.getElementById('saludo_texto').innerHTML=sal_tex;
    document.getElementById('saludo_texto').style.color=sal_tex_color;
    document.getElementById('saludo_texto').style.fontSize="25px";
    document.getElementById('saludo_texto').style.fontStyle="cursive";
    localStorage.setItem('sal_tex',sal_tex);
    localStorage.setItem('sal_tex_color',sal_tex_color);
}
function cuerpoTexto(){
    var cuerpo_tex=document.getElementById('cuerpo_tex').value;
    cuerpo_tex=cuerpo_tex.replace(/\n/g,"<br/>");
    var clr_cuerpo_tex=document.getElementById('color_cuerpo_tex').value;
    document.getElementById('cuerpo_texto').innerHTML=cuerpo_tex;
    document.getElementById('cuerpo_texto').style.color=clr_cuerpo_tex;
    document.getElementById('cuerpo_texto').style.fontSize="23px";
    document.getElementById('cuerpo_texto').style.fontStyle="cursive";
    localStorage.setItem('cuerpo_tex',cuerpo_tex);
    localStorage.setItem('clr_cuerpo_tex',clr_cuerpo_tex);
}
let mostrarTarjeta=function(){
    window.open('TarjetaFelicitacion.html');
}
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
new Vue({
    el:'#article_bebidas',
    data:{
        articulos:[
            { vig: "Disponible", bebida:"Café Expresso", ing: "Café puro de colombia", tam:"Mediano", precio: "$39"}, 
            { vig: "No Disponible por el momento", bebida:"Frappe Vainilla", ing: "Leche con extracto de vainilla", tam:"Grande", precio: "$59"}, 
            { vig: "Disponible", bebida:"Capuchino Americano", ing: "Leche batida con café", tam:"Mediano", precio: "$39"}, 
            { vig: "Disponible", bebida:"Té Verde", ing: "Té con hojas verdes del oriente", tam:"Grande", precio: "$59"}, 
            { vig: "No Disponible por el momento", bebida:"Té Chai", ing: "Té con extracto de Chai y Ginseng", tam:"Mediano", precio: "$49"}, 
        ],
        busqueda_x_nomb:'', 
        busqueda_x_prec: '',
        show: false,
        show2: false
    },
    methods:{
    },
    computed:{
        buscarBebida(){
            return this.articulos.filter((item)=> item.bebida.includes(this.busqueda_x_nomb)); 
        }, 
        preciosBebidas(){
            return this.articulos.filter((item)=> item.precio.includes(this.busqueda_x_prec)); 
        }
    }
});
new Vue({
    el:'#article_pedido',
    data:{
        articulos:[
        {cant:1,nombre:'Café Expresso',precio_unit:39,precio_items:0},
        {cant:1,nombre:'Capuchino Americano',precio_unit:39,precio_items:0},
        {cant:1,nombre:'Té Verde',precio_unit:59,precio_items:0}
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
    },
    computed:{
        TotalPrecio(){
            this.total=0;
            for(objeto of this.articulos){
                this.total+=objeto.precio_items;
            }
            return this.total
        }
    }
});
Vue.component("alerta", {
    props: ['tipo', 'posicion','frase','listado'],
    template: "#mensajeAlerta",
    methods: {
        ocultarMensaje(){
            this.$emit('ocultar');
        }
    },
});
const app = new Vue({
    el: "#cont",
    data: {
        mostrarL: false,
        mostrarSdL: false,
        mostrarG: false,
        mostrarVdS: false,
        mostrarSdA: false,
        correo:'',
        lugar:'',
        lugares:[],
        estado:false
        
    },
    methods:{
        agregar(){this.lugares.push(this.lugar);
            this.lugar='';
           },
        mostrarAgrad(){
            this.estado=!this.estado;
        }
    }
});