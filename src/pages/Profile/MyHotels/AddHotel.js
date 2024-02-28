import "./AddHotel.css"
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";
import { useRef, useState } from "react";

const AddHotel = props => {
    const imageRef = useRef()
    const [form, setForm] = useState({
        name:'',
        description: '',
        city:'',
        rooms:2,
        features: [],
        image: null,
        status: 0,
    });
    const [loading, setLoading] = useState(false)

    const submit = e => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
        setLoading(false);
    }, 500);
    }

    const changeFeatureHandler = e => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            const newFeatures = [...form.features, value];
            setForm({...form, features: newFeatures});
        } else {
            const newFeatures = form.features.filter(x => x !== value);
            setForm({...form, features: newFeatures});
        }
    }

    return (
<div className="card">
    <div className="card-header">Nowy hotel</div>
    <div className="card-body">


         <p className="text-muted">Uzupełnij dane hotelu</p>



        <form onSubmit={submit}>
            <div className="form-group">
                <label className="group">Nazwa</label>
                    <input 
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    type='text'
                    className={`form-control ${false ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">
                        Błąd
                    </div>
                    </div>

                    <div className="form-group">
                <label className="group">Opis</label>
                    <textarea 
                    value={form.description}
                    onChange={e => setForm({...form, description: e.target.value})}
                    type='text'
                    className={`form-control ${false ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">
                        Błąd
                    </div>
                    </div>

                    <div className="form-group">
                    <label className="group">Miejscowość</label>
                    <input 
                    value={form.city}
                    onChange={e => setForm({...form, city: e.target.value})}
                    type='text'
                    className={`form-control ${false ? 'is-invalid' : ''}`}/>
                <div className="invalid-feedback">
                    Błąd
                </div>
            </div>

            <div className="form-group">
                    <label className="group">Ilość pokoi</label>
                    <select value={form.rooms} 
                    className="form-control"
                    onChange={e => setForm({...form, rooms: e.target.value})}> 
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    </select>
                <div className="invalid-feedback">
                    Błąd
                </div>
            </div>

            <h4>Udogodnienia</h4>
            <div className="form-group">
                <label className="custom-control-label" htmlFor="tv">TV</label> 
                 <input 
                    type="checkbox" 
                    className="custom-control-label" 
                    value="tv"
                    onChange={changeFeatureHandler}
                    checked={form.features.find(x => x === 'tv')}
                    id="" />
                <label className="custom-control-label" htmlFor="wifi">WiFi</label> 
                 <input 
                    type="checkbox" 
                    className="custom-control-label" 
                    value="wifi"
                    onChange={changeFeatureHandler}
                    checked={form.features.find(x => x === 'wifi')}
                    id=""/>
                <label className="custom-control-label" htmlFor="parking">Parking</label>
                  <input 
                    type="checkbox" 
                    className="custom-control-label" 
                    value="parking"
                    onChange={changeFeatureHandler}
                    checked={form.features.find(x => x === 'parking')}
                    id=""/>
            </div>

            <div className="form-group">
                <h4>Zdjęcie</h4>
                <input 
                type='file'
                ref={imageRef}
                onChange={e => setForm({...form, image: e.target.files})}
                />
            </div>

            <h4>Status</h4>
            <div className="form-group">
                <div className="custom-control custom-radio">
                    <input 
                    type="radio"
                    id="status-active"
                    name="status"
                    value="1"
                    onChange={e => setForm({...form, status: e.target.value})}
                    checked={form.status == 1}
                    className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="status-active">Aktywny</label>
                </div>
                <div className="custom-control custom-radio">
                    <input 
                    type="radio"
                    id="status-hide"
                    name="status"
                    value="0"
                    onChange={e => setForm({...form, status: e.target.value})}
                    checked={form.status == 0}
                    className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="status-hide">Ukryty</label>
                </div>
            </div>
            <div className="text-right">
                <LoadingButton
                loading={loading}
                className="btn-success">
                    Dodaj hotel!
                </LoadingButton>
            </div>

        </form>
    </div>
</div>
    );
};

export default AddHotel