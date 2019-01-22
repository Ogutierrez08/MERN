import React,{Component} from 'react'
import Pagination from './Pagination'



class AddDist extends Component{
    constructor(){
        super()
        this.state={
            _id:'',
            CodigoDistribuidor: '',
            NombreDistribuidor: '',
            Etapa: '',
            Observacion: '',
            Region: '',
            Supervisor: '',
            Contacto: '',
            NumeroContacto: '',
            implementations:[],
            pageOfItems: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.onChangePage = this.onChangePage.bind(this)
        this.updateImp = this.updateImp.bind(this)
    }
    

    //PAGINACION
    onChangePage(pageOfItem) {
        this.setState({pageOfItems:pageOfItem})
    }

    //IMPLEMENTACION
    handleChange(e){
        const {name, value} = e.target
         this.setState({
             [name]:value
         })
         console.log(value)
     }
    
     updateImp(e){
         fetch(`/api/contest/imp/${this.state._id}`, {
             method: 'PUT',
             body: JSON.stringify(this.state),
             headers: {
                 'Accept':'application/json',
                 'Content-type':'application/json'
             }
         })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             M.toast({
                 html:'Distribuidor Actualizado'
             })
             this.setState({

             })
         })
     }

    fetchImpById(id){
        fetch(`/api/contest/imp/${id}`,{
            method : 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                _id:data._id,
                CodigoDistribuidor:data.CodigoDistribuidor,
                NombreDistribuidor:data.NombreDistribuidor,
                Etapa:data.Etapa,
                Observacion:data.Observacion,
                Region:data.Region,
                Supervisor:data.Supervisor,
                Contacto:data.Contacto,
                NumeroContacto:data.NumeroContacto
            })
        })
    }

    findImp(){
        fetch('/api/contest/imp')
        .then(res => res.json())
        .then(data =>{
            this.setState({implementations:data})
        }).then(()=>{
            console.log(this.state.implementations)
        })
    }
    componentDidMount(){
        this.findImp()
    }
    render(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal')
            var instances = M.Modal.init(elems)
        })

        return(
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="row">
                            <div className="col s3">
                                <a className="brand-logo"><span>STRATEGIO</span></a>
                            </div>
                            <div className="col s9">
                                <span style={{margin:'auto'}}>PROCESO DE IMPLEMENTACION</span>
                            </div>
                        </div>
                    </div>
                </nav>
                <aside style={{float:'left',marginTop:'20px',marginLeft:'10px',width:'400px'}}>
                        <div className="container">
                            <div className="card light-blue darken-4 white-text">
                                <div className="card-content">
                                    <div className="row">
                                        <p style={{fontSize:'20px'}}>IMPLANTACION</p>
                                    </div>
                                    <div className="row">
                                        <p style={{fontSize:'20px'}}>Fabrica</p>
                                    </div>
                                    <div className="row">
                                        <select id="lstDist" className="browser-default">
                                            <option value="">Selecciona una Fabrica</option>
                                            <option value="PROTISA">Protisa</option>
                                            <option value="CONFITECA">Confiteca</option>
                                            <option value="J&J">J&J</option>
                                            <option value="GASAC">GASAC</option>
                                            <option value="WINTERS">Winters</option>
                                        </select>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col" style={{margin:"5px"}}>
                                                <a className="btn-floating btn-large waves-effect waves-light green">
                                                <i className="material-icons">search</i>
                                                </a>
                                            </div>
                                            <div className="col" style={{margin:"5px"}}>
                                                <a className="btn-floating btn-large waves-effect waves-light red">
                                                <i className="material-icons">clear_all</i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </aside>
                <div id="modalImp" className="modal light-blue darken-4 white-text">
                    <div className="modal-content">
                        <div>
                            <h4>Proceso de Implementacion</h4>
                            <form onSubmit={this.updateImp}>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input name="CodigoDistribuidor" type="text" onChange={this.handleChange} placeholder="CodigoDistribuidor" className="white-text" value={this.state.CodigoDistribuidor}></input>
                                    </div>
                                    <div className="input-field col s6">
                                        <input name="NombreDistribuidor" type="text" onChange={this.handleChange} placeholder="NombreDistribuidor" className="white-text" value={this.state.NombreDistribuidor}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <select id="lstEtapa" onChange={this.handleChange} className="browser-default" value={this.state.Etapa}>
                                            <option value="">Selecciona una Etapa</option>
                                            <option value="01-Presentacion">01-Presentacion</option>
                                            <option value="02-Homologacion de Datos">02-Homologacion de Datos</option>
                                            <option value="03-Envio de Archivos Retroactivos">03-Envio de Archivos Retroactivos</option>
                                            <option value="04-Segmentacion">04-Segmentacion</option>
                                            <option value="05-Cancelado">05-Cancelado</option>
                                            <option value="10-Produccion">10-Produccion</option>
                                        </select>
                                    </div>
                                    <div className="input-field col s6">
                                        <select id="lstRegion" onChange={this.handleChange} className="browser-default" value={this.state.Region}>
                                            <option value="">Selecciona una Region</option>
                                            <option value="NOR-ORIENTE">NOR-ORIENTE</option>
                                            <option value="SUR-CENTRO">SUR-CENTRO</option>
                                            <option value="LIMA">LIMA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input name="Supervisor" type="text" onChange={this.handleChange} placeholder="Supervisor" className="white-text" value={this.state.Supervisor}></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <textarea name="Observacion" onChange={this.handleChange} placeholder="Ingresar Observaciones" className="white-text" style={{width:"400px",height:"150px"}} value={this.state.Observacion}></textarea>
                                    </div>
                                    <div className="input-field col s6">
                                        <input name="Contacto" type="text" onChange={this.handleChange} placeholder="Contacto" className="white-text" value={this.state.Contacto}></input>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <input name="NumeroContacto" type="text" onChange={this.handleChange} placeholder="Nro Contacto" className="white-text" value={this.state.NumeroContacto}></input>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button type="submit" className="btn-floating btn-large waves-effect waves-light green">
                                        <i className="material-icons">add_circle</i>
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button type="submit" className="modal-close btn-floating btn-large waves-effect waves-light red">
                                        <i className="material-icons">clear</i>
                                        </button>
                                    </div>  
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'20px'}}>
                    <div className="row">
                        <div className="table-responsive col s9">
                            <table className="centered white-text text-center highlight" style={{fontSize:"12px",fontFamily:"Comic Sans MS"}}>
                                <thead className="green accent-4 white-text" style={{borderStyle:"solid"}}>
                                    <tr>
                                        <th></th>
                                        <th>Codigo</th>
                                        <th>Distribuidora</th>
                                        <th>Etapa</th>
                                        <th>Observaciones</th>
                                        <th>Region</th>
                                        <th>Supervisor</th>
                                        <th>Contacto</th>
                                        <th>Tlf.Contacto</th>
                                    </tr>
                                </thead>
                                <tbody className="light-blue darken-4 white-text">
                                    {
                                        this.state.pageOfItems.map(element => {
                                            return(
                                                <tr key={element._id} style={{borderStyle:"solid"}}>
                                                    <td ><a className="btn-floating btn-small waves-effect waves-light green btn modal-trigger" href="#modalImp" onClick={() => {
                                                        this.fetchImpById(element._id)
                                                    }}><i className="material-icons">search</i></a></td>
                                                    <td>{element.CodigoDistribuidor}</td>
                                                    <td>{element.NombreDistribuidor}</td>
                                                    <td>{element.Etapa}</td>
                                                    <td>{element.Observacion}</td>
                                                    <td>{element.Region}</td>
                                                    <td>{element.Supervisor}</td>
                                                    <td>{element.Contacto}</td>
                                                    <td>{element.NumeroContacto}</td>      
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <Pagination items={this.state.implementations} onChangePage={this.onChangePage}></Pagination>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default AddDist