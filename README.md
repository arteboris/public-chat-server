# publick-chat-server API

view what routes pass

1) https://public-chat-server.herokuapp.com 
home-page(приветствие);

2) GET  /api/messages/list/0
        /api/messages/list/1
        /api/messages/list/2
        /api/messages/list/3
        и т.д.
   0 - ... - номерация страницы (база данных чистая, поэтому для тестирования добавьте сообщения)
   
   Example: 
   https://public-chat-server.herokuapp.com/api/messages/list/0
    {
    "status": "success",
    "messages": {
        "docs": [],
        "totalDocs": 37,
        "limit": 10,
        "totalPages": 4,
        "page": 1,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": true,
        "prevPage": null,
        "nextPage": 2
        }
      }
   
3) GET /api/messages/single/id

    Example: 
    https://public-chat-server.herokuapp.com/api/messages/single/5e4cf11658aabe1a44398827
    
    {
    "status": "success",
    "message": {
        "_id": "5e4cf11658aabe1a44398827",
        "email": "art@gmail.com",
        "text": "Lorem ipsum dolor sit",
        "createdAt": "2020-02-19T08:25:58.166Z",
        "updatedAt": "2020-02-19T08:25:58.166Z"
        }
     }


4) POST /api/messages
   Example: 
   https://public-chat-server.herokuapp.com/api/messages
   
   Example Value: 
   {
	"email": "test@gmail.com",
	"text": "test text"
   }
   Проверка: 
   email - обязательно '@';
   text - не пустой и не больше 100 символов.
   
   Проверки на уникальность email, text - нет.
   
   





