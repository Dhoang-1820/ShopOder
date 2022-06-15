const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// change tabs
const passportsElements = $('#select-passport')
const walletsElements = $('#select-wallet')
const charmElements = $('#select-charm')
const noteInputElements = $('#note-input')
const lbNoteElements = $('#lbNotePassport')
const lbNoteWalletElements = $('#lbNoteWallet')
const nameValue = $('#name')
const phoneValue = $('#phone')
const addressValue = $('#address')

const passportImg = $('.passport-img')
const charmImg = $('.charm-img')
const walletImg = $('.wallet-img')
const tabs = $$('.tab-item')
const panes = $$('.tab-pane')
const tabActive = $('.tab-item.active')
const line = $('.tabs .line')
const btnOrder = $('.btn-order')
const btnBuy = $('.btn-buy')

const noticeElement = $('.notifycation')


const app = {
    lastElementPassport: undefined,
    lastElementCharm: undefined,
    lastElementWallet: undefined,
    btnDelElement: undefined,
    passports: [
        {   
            id: 1, 
            path: 'img/passport/1.jpg',           
        },
        {   
            id: 2, 
            path: 'img/passport/2.jpg',           
        },
        {   
            id: 3, 
            path: 'img/passport/3.jpg',           
        },
        {   
            id: 4, 
            path: 'img/passport/4.jpg',           
        },
        {   
            id: 5, 
            path: 'img/passport/5.jpg',           
        },
        {
            id: 6, 
            path: 'img/passport/6.jpg', 
        },
        {
            id: 7,    
            path: 'img/passport/7.jpg', 
        },
        {
            id: 8,    
            path: 'img/passport/8.jpg', 
        },
        {
            id: 9, 
            path: 'img/passport/9.jpg', 
        },
        {
            id: 10, 
            path: 'img/passport/10.jpg',
        },
        {
            id: 11,
            path: 'img/passport/11.jpg',
        },
        {
            id: 12,   
            path: 'img/passport/12.jpg',
        },
        {
            id: 13,   
            path: 'img/passport/13.jpg',
        },
        {
            id: 14,
            path: 'img/passport/14.jpg',
        },
        {
            id: 15,
            path: 'img/passport/15.jpg',
        }
    ],
    colors: [{
        id: 1,
        description: 'Xanh cốm'
    }, {
        id: 2,
        description: 'Vàng'
    }, {
        id: 3,
        description: 'Cam'
    }, {
        id: 4,
        description: 'Hồng'
    }, {
        id: 5,
        description: 'Da bò'
    }, {
        id: 6,
        description: 'Xám'
    }, {
        id: 7,
        description: 'Lục bảo'
    }, {
        id: 8,
        description: 'Xanh da trời'
    }, {
        id: 9,
        description: 'Nâu'
    }, {
        id: 10,
        description: 'Xanh đen'
    }, {
        id: 11,
        description: 'Đỏ'
    }, {
        id: 12,
        description: 'Đen'
    }, {
        id: 13,
        description: 'Xanh biển'
    }, {
        id: 14,
        description: 'Đỏ đô'
    }, {
        id: 15,
        description: 'Tím'
    }],
    charms: [
        {
            id: 0,   
            path: 'img/charm/0.png',
        },
        {
            id: 1,   
            path: 'img/charm/1.png',
        },
        {
            id: 2,   
            path: 'img/charm/2.png',
        },
        {
            id: 3,   
            path: 'img/charm/3.png',
        },
        {
            id: 4,   
            path: 'img/charm/4.png',
        },
        {
            id: 5,   
            path: 'img/charm/5.png',
        },
        {
            id: 6,   
            path: 'img/charm/6.png',
        },
        {
            id: 7,   
            path: 'img/charm/7.png',
        },
        {
            id: 8,   
            path: 'img/charm/8.png',
        },
        {
            id: 9,   
            path: 'img/charm/9.png',
        },
        {
            id: 10,   
            path: 'img/charm/10.png',
        },
        {
            id: 11,   
            path: 'img/charm/11.png',
        },
        {
            id: 12,   
            path: 'img/charm/12.png',
        }
    ],
    wallets: [
        {   
            id: 1, 
            path: 'img/wallet/1.jpg',           
        },
        {   
            id: 2, 
            path: 'img/wallet/2.jpg',           
        },
        {   
            id: 3, 
            path: 'img/wallet/3.jpg',           
        },
        {   
            id: 4, 
            path: 'img/wallet/4.jpg',           
        },
        {   
            id: 5, 
            path: 'img/wallet/5.jpg',           
        },
        {
            id: 6, 
            path: 'img/wallet/6.jpg', 
        },
        {
            id: 7,    
            path: 'img/wallet/7.jpg', 
        },
        {
            id: 8,    
            path: 'img/wallet/8.jpg', 
        },
        {
            id: 9, 
            path: 'img/wallet/9.jpg', 
        },
        {
            id: 10, 
            path: 'img/wallet/10.jpg',
        },
        {
            id: 11,
            path: 'img/wallet/11.jpg',
        },
        {
            id: 12,   
            path: 'img/wallet/12.jpg',
        },
        {
            id: 13,   
            path: 'img/wallet/13.jpg',
        },
        {
            id: 14,
            path: 'img/wallet/14.jpg',
        },
        {
            id: 15,
            path: 'img/wallet/15.jpg',
        }
    ],
    cart: [
        
    ],
    order: [

    ],
    handleEvents: function () {
        const _this = this
        const imgPassport = passportsElements.querySelectorAll('.image')
        const imgCharm = charmElements.querySelectorAll('.image')
        const imgWallet = walletsElements.querySelectorAll('.image')
        
        // set firt image
        imgPassport[0].classList.add('selected')
        imgCharm[1].classList.add('selected')
        imgWallet[0].classList.add('selected')
        
        this.lastElementPassport = imgPassport[0]
        this.lastElementCharm = imgCharm[1]
        this.lastElementWallet = imgWallet[0]
        // change tabs
        
        line.style.left = tabActive.offsetLeft + 'px'
        line.style.width = tabActive.offsetWidth + 'px'
        tabs.forEach(function (tab, index) {
        const pane = panes[index]
        tab.onclick = function () {
            $('.tab-item.active').classList.remove('active')
            $('.tab-pane.active').classList.remove('active')

            line.style.left = tab.offsetLeft + 'px'
            line.style.width = tab.offsetWidth + 'px'

            this.classList.add('active')
            pane.classList.add('active')
            
            }
        })

        // handle choose image
        function removeSelected (element) {
            element.classList.remove('selected')
        }

        function chooseImg (element, isPassport, isCharm) {
            element.forEach (function (imgElement) {
                imgElement.onclick = function (e) {
                    const pathImg = e.target.getAttribute('src')
                    if (isPassport) {
                        passportImg.setAttribute('src', pathImg)
                        if (_this.lastElementPassport !== e.target) {
                            removeSelected(_this.lastElementPassport)
                        }
                        _this.lastElementPassport = e.target
                    } 
                    else if (isCharm) {
                        charmImg.setAttribute('src', pathImg)
                        if (_this.lastElementCharm !== e.target) {
                            removeSelected(_this.lastElementCharm)
                        }
                        _this.lastElementCharm = e.target
                    } 
                    else {
                        walletImg.setAttribute('src', pathImg)
                        if (_this.lastElementWallet !== e.target) {
                            removeSelected(_this.lastElementWallet)
                        }
                        _this.lastElementWallet  = e.target
                    }

                    imgElement.classList.add('selected')
                }
            })
        }
        // choose passports
        chooseImg(imgPassport, true, false)
        // choose charm
        chooseImg(imgCharm, false, true)
        // choose wallet
        chooseImg(imgWallet, false, false)

        //handle input note 
        noteInputElements.oninput = function () {
            lbNoteElements.innerText = noteInputElements.value
            lbNoteWalletElements.innerText = noteInputElements.value
        }    

        function getOrderItem () {
            const paneActive = $('.tab-pane.active')
            const charm = charmElements.querySelector('.image.selected')
            const name = noteInputElements.value
            const item = {
                type: undefined,
                color: undefined,
                charm: undefined,
                name: '',
            }

            let color = undefined
            if (paneActive.querySelector('.pane-passport')) {
                color = passportsElements.querySelector('.image.selected')
                item.type = 'Passport'
                item.charm = charm.getAttribute('src')
            } else {
                color = walletsElements.querySelector('.image.selected')
                item.type = 'Wallet'
                item.charm = undefined
            }

            item.color = color.getAttribute('src')
            item.name = name
            _this.cart.push(item)
            return item
        }
        
        function addRow(type, color, charm, name, btnDelete) {
            const table = $('.orderd-list')
            const totalItems = table.querySelector('.total-orderd-count')
            
            const row = table.insertRow(table.rows.length - 1) // -1 because get table befor add row
            const cell1 = row.insertCell(0)
            const cell2 = row.insertCell(1)
            const cell3 = row.insertCell(2)
            const cell4 = row.insertCell(3)
            const cell5 = row.insertCell(4)
            
            cell1.innerHTML = type
            cell2.innerHTML = color
            cell3.innerHTML = charm
            cell4.innerHTML = name
            cell5.innerHTML = btnDelete
            totalItems.innerText = `Tổng cộng: ${table.rows.length - 2}`  // -2 because except 2 row first and last row
        }

        btnOrder.onclick = function () {
            const item = getOrderItem() 
            let imgCharm
            
            if (item.charm) {
                imgCharm = `
                    <img src="${item.charm}" class="cart-img">
                `
            } else {
                imgCharm = ''
            }

            const imgColor = `
                <img src="${item.color}" class="cart-img">
            `
            const btnDelete = `
                <button class="btn-delete" onclick="app.delBtn(this)">Xoá</button>
            `
            addRow(item.type, imgColor, imgCharm, item.name, btnDelete)  
        }
        
        function isEmptyValue () {
            if (nameValue.value == '' || phoneValue.value == '' || addressValue.value == '') {
                return false
            }
            return true
        }

        btnBuy.onclick = function () {
            if (isEmptyValue() && _this.cart.length > 0) {
                console.log('Đặt hàng thành công')  
            } else {
                if ( _this.cart.length < 1)
                    alert(' Vui lòng chọn ít nhất một sản phẩm')
                else 
                    alert(' Vui lòng điền tên, số điện thoại và địa chỉ giao hàng')
            }  
        }        
    },
    delBtn: function (row) {
        const carts = this.cart
        const table = $('.orderd-list')
        const totalItems = table.querySelector('.total-orderd-count')
        var i = row.parentNode.parentNode.rowIndex;
        const children = table.rows[i].children
        const item = {
            type: children[0].innerText,
            color: children[1].children[0].getAttribute('src'),
            charm: children[2].children[0].getAttribute('src'),
            name: children[3].innerText,
        }      
        function getIndexOfCart (item) {
            for (let i = 0; i < carts.length; i++) {
                if (carts[i].type == item.type && carts[i].color == item.color && carts[i].name == item.name && carts[i].charm == item.charm) {
                    return i
                }  
            }
            return -1
        }
        const indexOfCart = getIndexOfCart (item)
        carts.splice(indexOfCart)
        table.deleteRow(i)
        totalItems.innerText = `Tổng cộng: ${table.rows.length - 2}` // -2 because except 2 row first and last         
    },
    render: function (options) {
        const htmls = options.map(function (option, index) {
            return `
            <img src="${option.path}" alt="Hinh anh" class="image" data-id="${option.id}" />
            `
        })
        return htmls.join('')
    },
    loadItem: function () {
        
        //laod passports
        passportsElements.innerHTML = this.render(this.passports)
        //load wallets
        walletsElements.innerHTML = this.render(this.wallets)
        //load charms
        charmElements.innerHTML = this.render(this.charms)
    },
    start: function () {

        this.loadItem()

        this.handleEvents()
    }
}
app.start()


function Validator (options) {
    function validate (inputElement, rule) {
        var errorMessage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        
        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.parentElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            inputElement.parentElement.parentElement.classList.remove('invalid')
        }
    }

    var formElement = document.querySelector(options.form)

    if (formElement) {
        options.rules.forEach (function (rule) {
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }

                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText = ''
                    inputElement.parentElement.parentElement.classList.remove('invalid')
                }
            }
        }) 
    }
   
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này!'
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Trường này phải là email!' //regex.test() test is funtion of regex
        }
    }
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Mật khẩu tối thiểu ${min} ký tự!`
        }
    }
}


























