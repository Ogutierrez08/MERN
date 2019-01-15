import React,{Component} from 'react'
import Pagination from './Pagination'

class App extends Component {
    constructor(){
        super()
        this.state = {
            _id:'',
            CodigoDistribuidor: '',
            NombreDistribuidor: '',
            CodigoVendedor: '',
            NombreVendedor: '',
            InicioPeriodo: '',
            FinPeriodo : '',
            PH: '',
            PT: '',
            SE: '',
            PO: '',
            PÑ: '',
            TF: '',
            TH: '',
            INC: '',
            NP: '',
            TO: '',
            SEE: '',
            contests:[],
            pageOfItems: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addContest = this.addContest.bind(this)
        this.onChangePage = this.onChangePage.bind(this)
        this.updateContest = this.updateContest.bind(this)
    }
    onChangePage(pageOfItem) {
        this.setState({pageOfItems:pageOfItem})
    }

    deleteContest(id){
        console.log('Eliminando',id)
        fetch(`/api/contest/${id}`,{
            method:'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            M.toast({
                html: 'Registro Eliminado',
                classes: 'rounded',
            })
            this.fetchContest()
        })
    }

    fetchContestById(id){
        console.log('Obteniendo Info',id)
        fetch(`/api/contest/id/${id}`,{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            this.setState({
                _id:data._id,
                CodigoDistribuidor: data.CodigoDistribuidor,
                NombreDistribuidor: data.NombreDistribuidor,
                CodigoVendedor: data.CodigoVendedor,
                NombreVendedor: data.NombreVendedor,
                InicioPeriodo: data.InicioPeriodo,
                FinPeriodo : data.FinPeriodo,
                PH: data.PH,
                PT: data.PT,
                SE: data.SE,
                PO: data.PO,
                PÑ: data.PÑ,
                TF: data.TF,
                TH: data.TH,
                INC: data.INC,
                NP: data.NP,
                TO: data.TO,
                SEE: data.SEE
            })   
        })
    }

    fetchContestByDist(dist){
        console.log('Listando',dist)
        fetch(`/api/contest/${dist}`,{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            this.setState({
                _id:'',
                CodigoDistribuidor: '',
                NombreDistribuidor: '',
                CodigoVendedor: '',
                NombreVendedor: '',
                InicioPeriodo: '',
                FinPeriodo : '',
                PH: '',
                PT: '',
                SE: '',
                PO: '',
                PÑ: '',
                TF: '',
                TH: '',
                INC: '',
                NP: '',
                TO: '',
                SEE: '',
                contests:data
            })   
        })
    }

    addContest(e){
        fetch('/api/contest', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            M.toast({
                html: 'Cuotas Guardadas'
            })
            this.setState({
                _id:'',
                CodigoDistribuidor: '',
                NombreDistribuidor: '',
                CodigoVendedor: '',
                NombreVendedor: '',
                InicioPeriodo: '',
                FinPeriodo : '',
                PH: '',
                PT: '',
                SE: '',
                PO: '',
                PÑ: '',
                TF: '',
                TH: '',
                INC: '',
                NP: '',
                TO: '',
                SEE: ''
            })
        })
        .catch(err => console.error(err))

        e.preventDefault()
    }

    updateContest(e){
        fetch(`/api/contest/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            M.toast({
                html: 'Cuotas Actualizadas'
            })
            this.setState({
                _id:'',
                CodigoDistribuidor: '',
                NombreDistribuidor: '',
                CodigoVendedor: '',
                NombreVendedor: '',
                InicioPeriodo: '',
                FinPeriodo : '',
                PH: '',
                PT: '',
                SE: '',
                PO: '',
                PÑ: '',
                TF: '',
                TH: '',
                INC: '',
                NP: '',
                TO: '',
                SEE: ''
            })
        })
        .catch(err => console.error(err))
        this.fetchContestByDist(document.getElementById("LstDist").value)
        e.preventDefault()
    }

    componentDidMount(){
        this.fetchContest()
    }

    fetchContest(){
        fetch('/api/contest')
        .then(res => res.json())
        .then(data =>{
            this.setState({contests:data})
        })
    }

    handleChange(e){
       const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    render(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
        })

        return(
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="row">
                            <div className="col s5">
                                <a className="brand-logo" href="/">MERN</a>
                            </div>
                            <div className="col s7" style={{marginTop:'10px'}}>
                            <select id="LstDist" className="browser-default" onChange={()=>{
                                this.fetchContestByDist(document.getElementById("LstDist").value)
                            }}>
                                <option value="" disabled selected>Selecciona una Distribuidora</option>
                                <option value="KONSUMASS">KONSUMASS</option>
                                <option value="DIPSA-ANDAHUAYLAS">DIPSA-ANDAHUAYLAS</option>
                                <option value="CHUPACA BUSINESS">CHUPACA BUSINESS</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.updateContest}>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="CodigoDistribuidor" onChange={this.handleChange} type="text" placeholder="Codigo" value={this.state.CodigoDistribuidor}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="NombreDistribuidor" onChange={this.handleChange} type="text" placeholder="Distruibuidora" value={this.state.NombreDistribuidor}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="NombreVendedor" onChange={this.handleChange} type="text" placeholder="Vendedor" value={this.state.NombreVendedor}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="PH" onChange={this.handleChange} type="text" placeholder="Cuota PH" value={this.state.PH}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="PT" onChange={this.handleChange} type="text" placeholder="Cuota PT" value={this.state.PT}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="SE" onChange={this.handleChange} type="text" placeholder="Cuota SE" value={this.state.SE}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="PO" onChange={this.handleChange} type="text" placeholder="Cuota PO" value={this.state.PO}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="PÑ" onChange={this.handleChange} type="text" placeholder="Cuota PÑ" value={this.state.PÑ}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="TF" onChange={this.handleChange} type="text" placeholder="Cuota TF" value={this.state.TF}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="TH" onChange={this.handleChange} type="text" placeholder="Cuota TH" value={this.state.TH}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="INC" onChange={this.handleChange} type="text" placeholder="Cuota INC" value={this.state.INC}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="NP" onChange={this.handleChange} type="text" placeholder="Cuota NP" value={this.state.NP}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="TO" onChange={this.handleChange} type="text" placeholder="Cuota TO" value={this.state.TO}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="SEE" onChange={this.handleChange} type="text" placeholder="Cuota SEE" value={this.state.SEE}/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">
                                            Actualizar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Distribuidora</th>
                                        <th>CodigoVendedor</th>
                                        <th>Vendedor</th>
                                        <th>Periodo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.pageOfItems.map(element =>{
                                            return(
                                                <tr key={element._id}>
                                                    <td>{element.NombreDistribuidor}</td>
                                                    <td>{element.CodigoVendedor}</td>
                                                    <td>{element.NombreVendedor}</td>
                                                    <td>{element.InicioPeriodo}</td>
                                                    <td><a className="btn-floating btn-large waves-effect waves-light red" onClick={() => {
                                                        this.fetchContestById(element._id)
                                                    }}><i className="material-icons">create</i></a></td>
                                                    <td><a className="btn-floating btn-large waves-effect waves-light green"  onClick={() =>{
                                                        this.deleteContest(element._id)
                                                    }}><i className="material-icons">delete</i></a></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <Pagination items={this.state.contests} onChangePage={this.onChangePage} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App