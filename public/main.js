let n = 2
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `page${n}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 400) {
                let array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n += 1
            } else { alert('加载失败') }
        }
    }
    request.send()
}
getJson.onclick = () => {
    axios.get('/5.json')
        .then((response) => {
            myName.textContent = response.data.name
        })
    // const request = new XMLHttpRequest()
    // request.open('GET', '/5.json')
    // request.onreadystatechange = () => {
    //     if (request.readyState === 4) {
    //         if (request.status >= 200 && request.status < 400) {
    //             const obj = JSON.parse(request.response)
    //             myName.textContent = obj.name
    //         } else { alert('加载失败') }
    //     }
    // }
    // request.send()

    getXML.onclick = () => {
        axios.get('/4.xml')
            .then((response) => {
                var parser = new DOMParser();
                var dom = parser.parseFromString(response.data, "text/xml")
                let string = dom.getElementsByTagName('warning')[0].textContent
                console.log(string.trim())
            }).catch(() => { alter('加载失败') })
        // const request = new XMLHttpRequest()
        // request.open('GET', '/4.xml')
        // request.onreadystatechange = () => {
        //     if (request.readyState === 4) {
        //         if (request.status >= 200 && request.status < 400) {
        //             const dom = request.responseXML
        //             const text = dom.getElementsByTagName('warning')[0].textContent
        //             console.log(text.trim())
        //         } else {
        //             alert('加载失败')
        //         }
        //     }
        // }
        // request.send()
    }

    getHTML.onclick = () => {
        axios.get('/3.html')
            .then(function (response) {
                const div = document.createElement('div')
                div.innerHTML = response.data
                document.body.appendChild(div)
            })
            .catch(function (error) {
                console.log(error);
            })
        // const request = new XMLHttpRequest()
        // request.open('GET', '/3.html')
        // request.onreadystatechange = () => {
        //     if (request.readyState === 4) {
        //         if (request.status >= 200 && request.status < 400) {
        //             let div = document.createElement('div')
        //             div.innerHTML = request.response
        //             document.body.appendChild(div)
        //         } else {
        //             alert('加载失败')
        //         }
        //     }
        // }
        // request.send()
    }

    getJs.onclick = () => {
        axios.get('/2.js')
            .then((response) => {
                let script = document.createElement('script')
                script.innerHTML = response.data
                document.body.appendChild(script)
            }, (error) => {
                console.log(error)
            })
        // const request = new XMLHttpRequest()
        // request.open('GET', '/2.js')
        // request.onreadystatechange = () => {
        //     if (request.readyState === 4) {
        //         if (request.status >= 200 && request.status < 400) {
        //             let script = document.createElement('script')
        //             script.innerHTML = request.response
        //             document.body.appendChild(script)
        //         } else {
        //             alert('加载失败')
        //         }
        //     }
        // }
        // request.send()
    }

    getCss.onclick = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '/style.css')
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 400) {
                    let style = document.createElement('style')
                    style.innerHTML = request.response
                    document.head.appendChild(style)
                } else (alert('加载失败'))
            }
        }
        request.send()
    }
