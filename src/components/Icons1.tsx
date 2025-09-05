function Icons1() {
    return (
        <div className="backend" style= {{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
            <div style ={{ textAlign: 'center'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="JAVA" width="50"/>
                <p>Java</p>
                </div>

            <div style ={{ textAlign: 'center'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="PYTHON" width="50"/>
                <p>Python</p>
                </div>
            
            <div style ={{ textAlign: 'center'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="NODEJS" width="50"/>
                <p>NodeJS</p>
                </div>
            
            <div style ={{ textAlign: 'center'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MYSQL" width="50"/>
                <p>MySQL</p>
                </div>
        </div>
    )
}

export default Icons1;