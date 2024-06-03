const handleUniverseHub = async (isShow) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const apiData = data.data.tools;
  displayData(apiData, isShow);
  
 
};

const displayData = (param, isShow) => {
  console.log(param);
 
  const showAllBtn = document.getElementById('btn-show-data');
  if (param.length > 6 && !isShow) {
    showAllBtn.classList.remove('hidden');
  }
  else{
    showAllBtn.classList.add('hidden');
  }

  if (!isShow) {
    param = param.slice(0, 6);
  }
  
  const mainDivContainer = document.getElementById("main-div-container");
  param.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.classList = "card  bg-base-100 shadow-xl";
    div.innerHTML = `
         <div class="">
        <figure><img onclick="handleModal('${element.id}')" src="${element.image }" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <p class='font-semibold text-[#999]'>1: ${element.features[0]}</p>
          <p class='font-semibold text-[#999]'>2: ${element.features[1]}</p>
          <p class='font-semibold text-[#999]'>3: ${element.features[2]}</p>
          <div class="card-actions border-t pt-3 items-center">
          <i class="fa-solid fa-calendar-days mt-4 text-[#999]"></i>
          <p class='text-[16px] text-gray-500 mt-4'>${element.published_in}</p></div>
          <i class="fa-solid fa-arrow-right text-[#999] -mt-5 text-end"></i>
          </div>
         
        </div>
      </div>
         
    `;
    mainDivContainer.appendChild(div);
  });
  
  loadingSpinner(false);
};


const handleShowBtn = () => {
  handleUniverseHub(true)
}

const loadingSpinner = (isLoad) =>{
  const hiddenBtn = document.getElementById('loading-spinner');
  if (isLoad) {
    hiddenBtn.classList.remove('hidden');
  }else{
    hiddenBtn.classList.add('hidden');
  }
}

const handleModal = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  const data = await res.json();
  const modalData = data.data;
  handleModalDataShow(modalData)
}

const handleModalDataShow = (modalData) =>{
  console.log(modalData);
 const mainDivModal = document.getElementById('my_modal_3')
 mainDivModal.classList = 'modal'
mainDivModal.innerHTML =  `
               <div class="modal-box">
                    <img src="${modalData.image_link[1]}" alt="">
                    <form method="dialog">
                        <button class="py-2 px-4 border-none rounded-full text-white absolute text-xl right-2 bg-red-600 top-2">✕</button>
                    </form>
                    <h3 class="font-bold text-lg">${modalData.tool_name}</h3>
                    <p class="py-4">dsfasdklfjsadlkfjasldkjf</p>
                </div>
  `
  my_modal_3.showModal()
}

handleUniverseHub();
