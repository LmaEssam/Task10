import './JobItem.css'
function JobItem({eachjob}){
    const Quallificationsarray=[...eachjob.languages, ...eachjob.tools]
    return(
        <div className='jobitem' style={eachjob.featured==true ? {borderLeft:'solid 4px hsl(180, 29%, 50%)'}:null}> 
            <div className='firstpart'>
                <img  className='logo' src={eachjob.logo}/>
                <div className='firstcontent'>
                   <div className='firstlabel'>
                    <label className='companyname'>{eachjob.company}</label>
                    {eachjob.new==true?<p className='new'>NEW</p>:null}
                    {eachjob.featured==true?<p className='featured'>FEATURED</p>:null}
                   </div>
                   <p>{eachjob.position}</p>
                   <ul className='secondlabels'>
                   <li>{eachjob.postedAt}</li>
                    <li>{eachjob.contract}</li>
                    <li>{eachjob.location}</li>
                   </ul>
                </div>
               

            </div>
            <div className="line"></div>
            <div className='qualifications'>
                    {Quallificationsarray.map((item,index)=>{
                        return <button key={index}>{item}</button>
                    })}
                </div>

        </div>
    )
}
export default JobItem