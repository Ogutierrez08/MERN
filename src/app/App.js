import React,{Component} from 'react'
import Pagination from './Pagination'

class App extends Component {
    constructor(){
        super()
        this.state = {
            codigodistribuidor: '',
            nombredistribuidor: '',
            codigovendedor: '',
            nombrevendedor: '',
            inicioperiodo: '',
            finperiodo : '',
            ph: '',
            pt: '',
            se: '',
            po: '',
            pñ: '',
            tf: '',
            th: '',
            inc: '',
            np: '',
            to: '',
            see: '',
            contests:[],
            pageOfItems: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addContest = this.addContest.bind(this)
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItem) {
        this.setState({pageOfItems:pageOfItem})
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
                codigodistribuidor: '',
                nombredistribuidor: '',
                codigovendedor: '',
                nombrevendedor: '',
                inicioperiodo: '',
                finperiodo : '',
                ph: '',
                pt: '',
                se: '',
                po: '',
                pñ: '',
                tf: '',
                th: '',
                inc: '',
                np: '',
                to: '',
                see: '',
            })
        })
        .catch(err => console.error(err))

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
        return(
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">MERN CONTEST</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addContest}>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="codigodistribuidor" onChange={this.handleChange} type="text" placeholder="Codigo" value={this.state.codigodistribuidor}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="nombredistribuidor" onChange={this.handleChange} type="text" placeholder="Distruibuidora" value={this.state.nombredistribuidor}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="nombrevendedor" onChange={this.handleChange} type="text" placeholder="Vendedor" value={this.state.nombrevendedor}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="ph" onChange={this.handleChange} type="text" placeholder="Cuota PH" value={this.state.ph}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="pt" onChange={this.handleChange} type="text" placeholder="Cuota PT" value={this.state.pt}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="se" onChange={this.handleChange} type="text" placeholder="Cuota SE" value={this.state.se}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="po" onChange={this.handleChange} type="text" placeholder="Cuota PO" value={this.state.po}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="pñ" onChange={this.handleChange} type="text" placeholder="Cuota PÑ" value={this.state.pñ}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="tf" onChange={this.handleChange} type="text" placeholder="Cuota TF" value={this.state.tf}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="th" onChange={this.handleChange} type="text" placeholder="Cuota TH" value={this.state.th}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="inc" onChange={this.handleChange} type="text" placeholder="Cuota INC" value={this.state.inc}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="np" onChange={this.handleChange} type="text" placeholder="Cuota NP" value={this.state.np}/>
                                            </div>
                                            <div className="input-field col s6">
                                                <input name="to" onChange={this.handleChange} type="text" placeholder="Cuota TO" value={this.state.to}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input name="see" onChange={this.handleChange} type="text" placeholder="Cuota SEE" value={this.state.see}/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">
                                            Agregar
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
                                                    <td><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">create</i></a></td>
                                                    <td><a class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">delete</i></a></td>
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