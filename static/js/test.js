const tableBody = document.getElementById('table-body-box')
const spinner = document.getElementById('spinner')
const modalBody = document.getElementById('modal-body')


$.ajax({
    type: 'GET',
    url: '/data-json/',
    success: function(response){
        console.log(response)
        const data = JSON.parse(response.data)
        console.log(data)
        // data.forEach(el=>{
        //     console.log(el.fields)
        //     // tableBody.innerHTML += `
        //     //     <tr>
        //     //         <td>${el.pk}</td>
        //     //         <td><div class="my-year" data-bs-toggle="modal" data-bs-target="#previewPicModal"><button>${el.fields.title}</button></div></td>
        //     //         <td>${el.fields.year}</td>
        //     //     </tr>
        //     // `
        //     tableBody.innerHTML += `
        //         <tr>
        //             <td><div class="my-year" data-bs-toggle="modal" data-bs-target="#previewPicModal"><button class="btn btn-info" >${el.fields.title}</button></div></td>
        //         </tr>
        //     `
        // })
        tableBody.innerHTML += `
                <tr>
                    <td><div class="my-year" data-bs-toggle="modal" data-bs-target="#previewPicModal"><span style="color:#524f4f; cursor: pointer;">... Показати більше</span></div></td>
                </tr>
            `
        
        // spinner.classList.add('not-visible')
    },
    error: function(error){
        // console.log('hrl12345678lo')
        console.log(error)
    }
})


