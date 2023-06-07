import { useState } from 'react';
import './Services.css';
import { webDev, UserInterface } from '../../assets/data';

import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services__section" id="services">
            <span className="section__subtitle">What I offer</span>
            <h2 className="section__title">Services</h2>

            <div className="services__container container">
                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">Web <br />Development</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            {webDev.map(({id, web,service}) =>{
                                return(
                                    <div key={id}
                                    className={`services_modal-content-${id}`}>
                                        <h3 className="services__modal-title">{web}</h3>
                                        
                                        <ul className="services__modal-services grid">
                                            <li className="services__modal-service">
                                                <HiOutlineCheckCircle className="services__modal-icon" />
                                                <p className="services__modal-info">
                                                    {service}
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                )
                                

                            })}
                            
                            
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <HiOutlineClipboardList className="services__icon" />
                        <h3 className="services__title">UI/UX<br />Design</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <HiOutlineArrowSmRight className="services__button-icon" />
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    
                        <div className="services__modal-content">
                                <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                                {UserInterface.map(({id, smt, service}) =>{
                                    return(
                                        <div key={id}>
                                            <h3 className="services__modal-title">{smt}</h3>
                                            <p className="services__modal-description">
                                                {service}
                                            </p>
                                        </div>                                        
                                            
                                    )
                                })}        
                        </div> 
                    </div>
                    
                </div>
            </div>
        
        </section>
  );
}

export default Services;