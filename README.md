API for Hookan-Blender App.

##Register

Allows to sign up to Hookan-Blender App.
Now you can send requests to the address: `https://rs-clone-vs2c.onrender.com`.

## Usage

- **User**
    - [Registration](https://github.com/Flash226/rs-clone-back#register)
    - [Login](https://github.com/Flash226/rs-clone-back#login)
    - [CheckAuth](https://github.com/Flash226/rs-clone-back#check-auth)
- **Profile user**
    - [Get Profile](https://github.com/Flash226/rs-clone-back#get-profile)
    - [Set Profile](https://github.com/Flash226/rs-clone-back#set-profile)
- **Site functional**
    - [Upload image](https://github.com/Flash226/rs-clone-back#upload-image)
    - [Set search phrase](https://github.com/Flash226/rs-clone-back#set-search-phrase)
    - [Get search phrase](https://github.com/Flash226/rs-clone-back#get-search-phrase)
    - [Set flavor preference](https://github.com/Flash226/rs-clone-back#set-flavor-preference)
    - [Get flavor preference](https://github.com/Flash226/rs-clone-back#get-flavor-preference)
    - [Get top 10](https://github.com/Flash226/rs-clone-back#get-top-10)
    - [Get random mix](https://github.com/Flash226/rs-clone-back#get-random-mix)
    - [Get all brands](https://github.com/Flash226/rs-clone-back#get-all-brands)
    - [Get all flavors](https://github.com/Flash226/rs-clone-back#get-all-flavors)
    - [Get all mixes](https://github.com/Flash226/rs-clone-back#get-all-mixes)
    - [Get flavor](https://github.com/Flash226/rs-clone-back#get-flavor)
    - [Get mix](https://github.com/Flash226/rs-clone-back#get-mix)
    - [Create new brand](https://github.com/Flash226/rs-clone-back#create-new-brand)
    - [Create new flavor](https://github.com/Flash226/rs-clone-back#create-new-flavor)
    - [Get all rate](https://github.com/Flash226/rs-clone-back#get-all-rate)
    - [Get time change](https://github.com/Flash226/rs-clone-back#get-time-change)
    - [Get rate](https://github.com/Flash226/rs-clone-back#get-rate)
    - [Set rate](https://github.com/Flash226/rs-clone-back#set-rate)
    - [Get favorite mix](https://github.com/Flash226/rs-clone-back#get-favorite-mix)
    - [Set favorite mix](https://github.com/Flash226/rs-clone-back#set-favorite-mix)
    - [Get favorite flavors](https://github.com/Flash226/rs-clone-back#get-favorite-flavors)
    - [Set favorite flavors](https://github.com/Flash226/rs-clone-back#set-favorite-flavors)
    - [Get my mix](https://github.com/Flash226/rs-clone-back#get-my-mix)
    - [Set my mix](https://github.com/Flash226/rs-clone-back#set-my-mix)
    - [Get all users mix](https://github.com/Flash226/rs-clone-back#get-all-users-mix)
    

   
   

**Register**
----
Register user.

<details>

* **URL**

    /auth/registration

* **Method:**

    `POST`

* **Headers:**

    'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

     ```json
      {
        "username": "email",
        "password": "password",
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {"message": "User successfully registered"}
    ```
    **Headers:**
    
    None
 
* **Error Response:**

    **Code:** 400<br />
    **Content:** 
    ```json
      "message": "A user with the same name already exists"
    ```

* **Notes:**

    None

</details>

**Login**
----
Returns json data.

<details>

* **URL**

    /auth/login

* **Method:**

    `POST`

* **Headers:**

    'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

     ```json
      {
        "username": "email",
        "password": "password",
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "token": "sjhI&Shi8798dsk",
        "userId": "#lksdklsdo879osudiljlj",
      }
    ```
 
* **Error Response:**

  * **Code:** 400 NOT FOUND <br />
    **Content:** 
    ```json
      "message": "Password not valid"
    ```
    or
    **Content:** 
    ```json
      "message": "User username not found"
    ```
    or
    **Content:** 
    ```json
      "message": "Login error"
    ```
* **Notes:**

    None

</details>

**Check auth**
----
Checking authorization.

<details>

* **URL**

    /auth/check

* **Method:**

    `GET`

* **Headers:**

    `"Authorization": `"Bearer ahjsdkasjhdkjahdashdkk"`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200<br />
    **Content:** 
    ```json
      true
    ```
    or 
    ```json
      false
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>


**Get profile**
----
Returns profile data.

<details>

* **URL**

    /auth/profile

* **Method:**

    `POST`

* **Headers:**

    'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

     ```json
      {
        "id": "kjhkyftjfkjhhkhk",
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "userId": "jghjgkhkl",
        "name": "userName",
        "instagramAccount": "hsklhfcrhshec.jpg",
        "avatar": "",
        "favorite": [2, 5, 6],
        "favoriteFlavors": [1, 4, 44],
        "myMix": [3, 5, 45],
        "rating": [23, 43, 21],
      }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>


**Set profile**
----
Returns profile data.

<details>

* **URL**

    /auth/profiles

* **Method:**

    `POST`

* **Headers:**

    'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

     ```json
      {
        "userId": "jghjgkhkl",
        "name": "userName",
        "instagramAccount": "hsklhfcrhshec.jpg",
        "avatar": "",
        "favorite": [2, 5, 6],
        "favoriteFlavors": [1, 4, 44],
        "myMix": [3, 5, 45],
        "rating": [23, 43, 21],
      }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      { "message": "Profile edited" }
    ```
 
* **Error Response:**

    * **Code:** 400 <br />
    **Content:** 
    ```json
      { "message": "Profile edit error" }
    ```
  
* **Notes:**

    None

</details>



**Upload image**
----
Returns new name image.

<details>

* **URL**

    /uploadfile

* **Method:**

    `POST`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

     ```json
     "formData"
     ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "filename": "ahshd21jadjhsd.jpg" 
      }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Set search phrase**
----

<details>

* **URL**

    /search/:phrase

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    :mandarine

* **Query Params**

    None

* **Data Params**

     None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "message": "Search phrase count added" 
      }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>


**Get search phrase**
----
Returns 10 phrase.

<details>

* **URL**

    /search

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        ["lime", "mandarine", "polo", "search", "kiwi", "melon", "cherry", "apple", "orange", "tabaco"]
      }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>


**Set flavor preferense**
----

<details>

* **URL**

    /flavorpreference

* **Method:**

    `POST`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    ```json
      {
        "userId": "uasdiu98iqw",
        "flavors": ["apple", "melon"],
        "strange": "strong",
        "brands": ["red", "pikut"],
      }
    ```

* **Query Params**

    None

* **Data Params**

     None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "userId": "uasdiu98iqw",
        "flavors": ["apple", "melon"],
        "strange": "strong",
        "brands": ["red", "pikut"],
      }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>


**Get flavor preferense**
----
Return user flavor preferense.

<details>

* **URL**

    /flavorpreference

* **Method:**

    `POST`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```json
      {
        "userId": "uasdiu98iqw",
        "flavors": [],
        "strange": "",
        "brands": [],
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {
        "userId": "uasdiu98iqw",
        "flavors": ["apple", "melon"],
        "strange": "strong",
        "brands": ["red", "pikut"],
      }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>



**Get top 10**
----
Returns the 10 mixes with the most votes.

<details>

* **URL**

    /api/top10

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      [{
      "name": "Яблочная шипучка",
      "description":
        "Смесь острого и сладкого, эта смесь сочетает в себе сочный, свежий аромат двойного яблока Chabacco и пикантные лимонные ноты лимона Darkside. Идеально подходит для тех, кто любит баланс терпких и сладких вкусов, этот микс обязательно порадует вкусовые рецепторы.",
      "compositionById": {
        "flavor1": 30,
        "flavor2": 39,
      },
      "compositionByPercentage": {
        "flavor1": 71,
        "flavor2": 29,
      },
      "image": "./images/Mixes/34.webp",
      "id": 34,
     },]
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>


**Get random mix**
----
Returns random mix.

<details>

* **URL**

    /api/randommix

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {
      "name": "Яблочная шипучка",
      "description":
        "Смесь острого и сладкого, эта смесь сочетает в себе сочный, свежий аромат двойного яблока Chabacco и пикантные лимонные ноты лимона Darkside. Идеально подходит для тех, кто любит баланс терпких и сладких вкусов, этот микс обязательно порадует вкусовые рецепторы.",
      "compositionById": {
        "flavor1": 30,
        "flavor2": 39,
      },
      "compositionByPercentage": {
        "flavor1": 71,
        "flavor2": 29,
      },
      "image": "./images/Mixes/34.webp",
      "id": 34,
     }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>



**Get all brands**
----
Return all brands from database.

<details>

* **URL**

    /api/brands

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      [{
      "name": "Brusko",
      "image": "./images/Brusko/brusko-logo.webp",
      "id": 1,
    },
    {
      "name": "Burn",
      "image": "./images/Burn/burn-logo.webp",
      "id": 2,
    },]
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Get all flavors**
----
Return all flavors from database.

<details>

* **URL**

    /api/flavors

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      [{
      "brand": "Brusko",
      "name": "Грейпфрут с Малиной",
      "description":
        "Насыщенный вкус грейпфрутовой мякоти с легкой горчинкой в сочетании со спелой садовой малиной не оставит равнодушным любителей фруктово-ягодных миксов.",
      "image": "./images/Brusko/1.webp",
      "strength": "легкий",
      "flavor": ["цитрусовый", "ягодный"],
      "id": 1,
      },]
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Get all mixes**
----
Return all mixes from database.

<details>

* **URL**

    /api/mixes

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      [{
      "name": "Яблочная шипучка",
      "description":
        "Смесь острого и сладкого, эта смесь сочетает в себе сочный, свежий аромат двойного яблока Chabacco и пикантные лимонные ноты лимона Darkside. Идеально подходит для тех, кто любит баланс терпких и сладких вкусов, этот микс обязательно порадует вкусовые рецепторы.",
      "compositionById": {
        "flavor1": 30,
        "flavor2": 39,
      },
      "compositionByPercentage": {
        "flavor1": 71,
        "flavor2": 29,
      },
      "image": "./images/Mixes/34.webp",
      "id": 34,
      },]
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>


**Get flavor**
----
Return the flavor with the given id.

<details>

* **URL**

    /api/flavors/:id

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    id flavor

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {
      "brand": "Brusko",
      "name": "Грейпфрут с Малиной",
      "description":
        "Насыщенный вкус грейпфрутовой мякоти с легкой горчинкой в сочетании со спелой садовой малиной не оставит равнодушным любителей фруктово-ягодных миксов.",
      "image": "./images/Brusko/1.webp",
      "strength": "легкий",
      "flavor": ["цитрусовый", "ягодный"],
      "id": 1,
      }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>


**Get mix**
----
Return the mix with the given id.

<details>

* **URL**

    /api/mixes/:id

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    id mix

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
      ```json
      {
      "name": "Яблочная шипучка",
      "description":
        "Смесь острого и сладкого, эта смесь сочетает в себе сочный, свежий аромат двойного яблока Chabacco и пикантные лимонные ноты лимона Darkside. Идеально подходит для тех, кто любит баланс терпких и сладких вкусов, этот микс обязательно порадует вкусовые рецепторы.",
      "compositionById": {
        "flavor1": 30,
        "flavor2": 39,
      },
      "compositionByPercentage": {
        "flavor1": 71,
        "flavor2": 29,
      },
      "image": "./images/Mixes/34.webp",
      "id": 34,
       },
      ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Create new brand**
----
Create new brand in database.

<details>

* **URL**

    /api/brands

* **Method:**

    `POST`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```json
      {
      "name": "name",
      "imageName": "imageName",
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {
        "id": "newId",
        "name": "name",
        "image": "imageName",
      }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Create new flavor**
----
Create new flavor in database.

<details>

* **URL**

    /api/flavors

* **Method:**

    `POST`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```json
      {
        "brand": "Tayo";
        "name": "Melon train";
        "description": "Perfectly flavor";
        "image": "melon.img";
        "strength": "крепкий",
        "flavor": ["фруктовый", "тропический"],
      }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {
        "id": "newId",
        "brand": "Tayo";
        "name": "Melon train";
        "description": "Perfectly flavor";
        "image": "melon.img";
        "strength": "крепкий",
        "flavor": ["фруктовый", "тропический"],
      }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Get all rate**
----
Returns all rated mixes.

<details>

* **URL**

    /api/allrate

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      [
        {
      "name": "Яблочная шипучка",
      "description":
        "Смесь острого и сладкого, эта смесь сочетает в себе сочный, свежий аромат двойного яблока Chabacco и пикантные лимонные ноты лимона Darkside. Идеально подходит для тех, кто любит баланс терпких и сладких вкусов, этот микс обязательно порадует вкусовые рецепторы.",
      "compositionById": {
        "flavor1": 30,
        "flavor2": 39,
      },
      "compositionByPercentage": {
        "flavor1": 71,
        "flavor2": 29,
      },
      "image": "./images/Mixes/34.webp",
      "id": 34,
      },
     ]
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Get time change**
----
Returns last time changed database in Date format.

<details>

* **URL**

    /change-time

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {"message": "lastChange (Date format)"}
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Get rate**
----
Returns mixes rate and number of votes.

<details>

* **URL**

    /auth/rate/:id

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    id mix

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      { "rate": 4.7, "vote": 14 }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Set rate**
----
Returns mixes rate and number of votes.

<details>

* **URL**

    /auth/rate/

* **Method:**

    `POST`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```json
        "userId": "KLHjkshd776s",
        "id": 32,
        "rate": 4.5,
    ```
    
* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      { "rate": 4.7, "vote": 14 }
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>







**Get favorite mix**
----
Returns id favorite user mixes.

<details>

* **URL**

    /auth/favorite/:id

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    id user

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {[21, 12, 4, 5]}
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Set favorite mix**
----
Returns id favorite user mixes.

<details>

* **URL**

    /auth/rate/

* **Method:**

    `POST`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```json
        "userId": "KLHjkshd776s",
        "id": 32,
    ```
    
* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {[23, 45, 32]}
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>




**Get favorite flavors**
----
Returns id favorite user flavors.

<details>

* **URL**

    /auth/favoriteflavor/:id

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    id user

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {[21, 12, 4, 5]}
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Set favorite flavor**
----
Returns id favorite user flavors.

<details>

* **URL**

    /auth/favoriteflavor/

* **Method:**

    `POST`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```json
        "userId": "KLHjkshd776s",
        "id": 32,
    ```
    
* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {[23, 45, 32]}
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>




**Get my mix**
----
Returns id favorite user mix.

<details>

* **URL**

    /auth/my-mix/:id

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    id user

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {[21, 12, 4, 5]}
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>

**Set my mix**
----
Returns id favorite user mix.

<details>

* **URL**

    /auth/my-mix/

* **Method:**

    `POST`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```json
        {
        "name": "Яблочная шипучка",
      "description":
        "Смесь острого и сладкого, эта смесь сочетает в себе сочный, свежий аромат двойного яблока Chabacco и пикантные лимонные ноты лимона Darkside. Идеально подходит для тех, кто любит баланс терпких и сладких вкусов, этот микс обязательно порадует вкусовые рецепторы.",
      "compositionById": {
        "flavor1": 30,
        "flavor2": 39,
      },
      "compositionByPercentage": {
        "flavor1": 71,
        "flavor2": 29,
      },
      "image": "./images/Mixes/34.webp",
      "id": 34,
      "idUser": "68jash7asd",
        }
    ```
    
* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      {[23, 45, 32]}
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>




**Get all users mix**
----
Returns an array of user created mixes.

<details>

* **URL**

    /auth/mix-users-all

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
     ```json
      [
        {
        "name": "Яблочная шипучка",
      "description":
        "Смесь острого и сладкого, эта смесь сочетает в себе сочный, свежий аромат двойного яблока Chabacco и пикантные лимонные ноты лимона Darkside. Идеально подходит для тех, кто любит баланс терпких и сладких вкусов, этот микс обязательно порадует вкусовые рецепторы.",
      "compositionById": {
        "flavor1": 30,
        "flavor2": 39,
      },
      "compositionByPercentage": {
        "flavor1": 71,
        "flavor2": 29,
      },
      "image": "./images/Mixes/34.webp",
      "id": 34,
      "idUser": "68jash7asd",
      "userName": "Loui",
      "instagramAccount": "@loui",
      "avatar": "jdksfhd.jpg",
        },
      ]
    ```
 
* **Error Response:**

    None
  
* **Notes:**

    None

</details>
