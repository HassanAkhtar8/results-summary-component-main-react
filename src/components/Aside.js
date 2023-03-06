import data from './data.json';
function Aside(){
    return(
        <aside>
            <h2>Summary</h2>
            <div className="summary-container">
            {
                data.map( item =>
                    <div id={item.category.toLowerCase()} className='summary' key={item.score}>
                            <div className='inline-block inline'>
                                <img className='icon' src={item.icon} alt={item.category} />
                                <h3>{item.category}</h3>
                            </div>
                            <div className='inline-block span'>
                                <h3>{item.score}
                                <span> / 100</span>
                                </h3>
                                </div>
                            
                    </div>
                    )
                  
            }
            <button className='btn'>Continue</button>
            </div>
        </aside>
    );
}
export default Aside;