import React,{Component} from 'react'
import Pagination from './Pagination'
import Modal from 'react-modal'



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
            isActive:false
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
                 'Contest-type':'application/json'
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
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
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
                                            <div style={{margin:"5px"}}>
                                                <a className="btn-floating btn-large waves-effect waves-light green">
                                                <i className="material-icons">search</i>
                                                </a>
                                            </div>
                                            <div style={{margin:"5px"}}>
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
                <div  style={{marginTop:'20px'}}>
                    <div className="row">
                        <div className="table-responsive col s9">
                            <table className="table table-bordered white-text text-center" style={{fontSize:"10px",fontFamily:"Comic Sans MS"}}>
                                <thead className="bg-success">
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
                                                <tr key={element._id}>
                                                    <td><a className="btn-floating btn-small waves-effect waves-light green" href="#modal1" onClick={() => {
                                                        //this.fetchContestById(element._id)
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