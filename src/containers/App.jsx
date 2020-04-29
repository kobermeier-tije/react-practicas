

import React, {useState, useEffect} from 'react';
import Header          from '../components/Header';
import Search          from '../components/Search';
import Categories      from '../components/Categories';
import Carousel        from '../components/Carousel';
import CarouselItem    from '../components/CarouselItem';
import Footer          from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState'
const App = ()  => {
    const initalState = useInitialState(API);
          console.log(initalState);
	return (
	    <div className="App">
	       <Header/>
	       <Search/>
	            
           {/*{
                Object.keys(initalState).length > 0 &&
                Object.values(initalState).map((list, index) => {
                    return list.length < 1 ? null : (
                        <Categories
                            key={Object.keys(initalState)[index]}
                            title={Object.keys(initalState)[index]}
                        >
                            <Carousel>
                                {
                                    list.map((item) => {
                                        return (
                                            <CarouselItem
                                                key={item.id}
                                                {...item}
                                            />
                                        );
                                    })
                                }
                            </Carousel>
                        </Categories>
                    );
                })
            }*/}
            
           { initalState.mylist?.length > 0 && 
	       	   (<Categories title='Mi Lista'>
			        <Carousel>
				       <CarouselItem/>
				    </Carousel>
	            </Categories>)
	       }
	       
	       { initalState.trends?.length > 0 && 
	       	   (<Categories title='Tendencias'>
			       <Carousel>
			        {initalState.trends?.map(item => 
			        	(<CarouselItem key={item.id} {...item}/>)
			        )}
			       </Carousel>
	            </Categories>)
	       }
           
           { initalState.originals?.length > 0 && 
	       	   (<Categories title='Originales de Platzi Video'>
			       <Carousel>
				    {initalState.originals?.map(item => 
			        	(<CarouselItem key={item.id} {...item}/>)
			        )}
			       </Carousel>
	            </Categories>)
	       }
	     

	       <Footer/>
	    </div>
    );
}
export default App;