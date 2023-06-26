const http = require('http');


const server = http.createServer((req,res)=>{

  /*   console.log(req.url, req.method, req.headers); */
    const url = req.url;
    const s=`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>`
    
    if(url === '/'){
        res.write('<html>');
        res.write(`<meta charset="UTF-8">`);
        res.write(`<head><title>VENTA ARTEMIS</title>${s}</head>`);
        res.write(`<body>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">NODE JS </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/">Home</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/user">User</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/categories">Catogory</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/products">Products</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/employees">Employees</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/customers">Customers</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/sales">Sales</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/shopping">Shopping</a>
          </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div class="container mt-5">
        <div class="row">
              <div class"col">
                <h2>DATOS VENTAS ARTEMIS</h2><br><br>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>Eliminar</th>
                        <th>Actualizar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Empresa A</td>
                        <td>123-456-7890</td>
                        <td>Dirección 1</td>
                        <td> <a  class="btn btn-danger">BORRAR </a></td>
                        <td> <a  class="btn btn-primary">MODIFICAR </a></td>
                          
                      </tr>
                      <tr>
                        <td>Empresa B</td>
                        <td>987-654-3210</td>
                        <td>Dirección 2</td>
                        <td> <a  class="btn btn-danger">BORRAR </a></td>
                        <td> <a  class="btn btn-primary">MODIFICAR </a></td>
                      </tr>
                      <tr>
                        <td>Empresa C</td>
                        <td>555-555-5555</td>
                        <td>Dirección 3</td>
                        <td> <a  class="btn btn-danger">BORRAR </a></td>
                        <td> <a  class="btn btn-primary">MODIFICAR </a></td>
                      </tr>
                    </tbody>
                  </table>
              
              </div>
      </div>
        </div>
      </body>`);
        res.write('</html>');
        return res.end();
        }

        if(url === '/user'){
        
          
          res.write('<html>');
          res.write(`<meta charset="UTF-8">`);
          res.write(`<head><title>USUARIOS</title>${s}</head>`);
          res.write(`<body>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">NODE JS </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/">Home</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/user">User</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/categories">Catogory</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/products">Products</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/employees">Employees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/customers">Customers</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/sales">Sales</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/shopping">Shopping</a>
            </li>
                
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div class="container mt-2">
            <div class="row mt-5">
              <div class="col-md-6">
                <h2>Agregar Usuario</h2>
                <form>
                  <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Ingrese el nombre">
                  </div>
                  <div class="form-group">
                    <label for="cel">celular</label>
                    <input type="text" class="form-control" id="celular" placeholder="Ingrese el celular">
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="eamil" placeholder="Ingrese el email">
                  </div><br>
                  <button type="submit" class="btn btn-primary">Agregar</button>
                </form>
              </div>
              <div class="col-md-6">
                <h2>Lista de Usuarios</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="d-flex align-items-center">
                      <img src="https://media.licdn.com/dms/image/C4E03AQF_yMQSD4kUuQ/profile-displayphoto-shrink_200_200/0/1612962559508?e=1693440000&v=beta&t=tIihF74mdIhl6Hk5ldeT2ZbK3fJRC47xh4-HnN4ZQ5E" alt="Imagen de Usuario" class="rounded-circle" width="50" height="50">
                      <span class="ml-3 px-2">Angela Goméz</span>
                    </div>
                  </li>
                  <li class="list-group-item">
                    
                  <div class="d-flex align-items-center">

                      <img src="https://avatars.githubusercontent.com/u/70393311?v=4" alt="Imagen de Usuario" class="rounded-circle" width="50" height="50">
                      <span class="ml-3 px-2"> Dairon Porras</span>
                    </div>
                  </li>
                  <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <img src="https://media.licdn.com/dms/image/D4E03AQHGMxfsbBZOXQ/profile-displayphoto-shrink_200_200/0/1668261945191?e=1693440000&v=beta&t=25RjBaomw18VU5gPbpH_0VPC2Y5c4jJuwx-am6KfxWw" alt="Imagen de Usuario" class="rounded-circle" width="50" height="50">
                    <span class="ml-3 px-2"> Ana Cárdenas</span>
                  </div>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </body>`);

          res.write('</html>');
          return res.end();
        }

        if(url === '/categories'){
          res.write('<html>');
        res.write(`<meta charset="UTF-8">`);
        res.write(`<head><title>CATEGORIAS</title>${s}</head>`);
        res.write(`<body>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">NODE JS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/">Home</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/user">User</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/categories">Catogory</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/products">Products</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/employees">Employees</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/customers">Customers</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/sales">Sales</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:7000/shopping">Shopping</a>
          </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div class="container mt-5">
      
      <h1>Categorías de Productos</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Eliminar</th>
            <th>Actualizar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electrónica</td>
            <td>Productos electrónicos y gadgets</td>
            <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
          </tr>
          <tr>
            <td>Ropa</td>
            <td>Ropa para hombres, mujeres y niños</td>
            <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
          </tr>
          <tr>
            <td>Hogar</td>
            <td>Artículos para el hogar y decoración</td>
            <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
          </tr>
          <tr>
            <td>Alimentación</td>
            <td>Productos alimenticios y bebidas</td>
            <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
          </tr>
          <tr>
            <td>Belleza</td>
            <td>Productos de cuidado personal y belleza</td>
            <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
          </tr>
        </tbody>
      </table>
    </div>
     
      </body>`);
        res.write('</html>');
        return res.end();
        }
        if(url === '/employees'){
          res.write('<html>');
          res.write(`<meta charset="UTF-8">`);
          res.write(`<head><title>EMPLOYEES</title>${s}</head>`);
          res.write(`<body>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">NODE JS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://localhost:7000/">Home</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://localhost:7000/user">User</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://localhost:7000/categories">Catogory</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://localhost:7000/products">Products</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://localhost:7000/employees">Employees</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://localhost:7000/customers">Customers</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://localhost:7000/sales">Sales</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://localhost:7000/shopping">Shopping</a>
                </li>
                
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav><br>
        <div class="container">
        <h1>Listado de Empleados</h1>
        <div class="row">
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th>Foto</th>
                  <th>Nombre</th>
                  <th>Cargo</th>
                  <th>Email</th>
                  <th>Eliminar</th>
                  <th>Actualizar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="https://media.licdn.com/dms/image/C4D03AQGTDmKXjFhD7Q/profile-displayphoto-shrink_200_200/0/1646165718727?e=1693440000&v=beta&t=pFxzk5ermxmLBO56zg6FyFW0gm7dW73M1TdHAucH2d4" alt="Foto de Empleado" class="rounded-circle" width="50" height="50"></td>
                  <td>Diego Oswaldo</td>
                  <td>Imgeniero</td>
                  <td>Diego@example.com</td>
                  <td> <a  class="btn btn-danger">BORRAR </a></td>
                  <td> <a  class="btn btn-primary">MODIFICAR </a></td>
                </tr>
                <tr>
                  <td><img src="https://media.licdn.com/dms/image/D4E03AQFGjQCGiG39uA/profile-displayphoto-shrink_200_200/0/1684369619450?e=1693440000&v=beta&t=M-sQcTxGuz7cvdW52awW9q4iqinIUUmOLkhak8LJQ6I" alt="Foto de Empleado" class="rounded-circle" width="50" height="50"></td>
                  <td>Andrea Paredes</td>
                  <td>SEO</td>
                  <td>AndreaSeo2@example.com</td>
                  <td> <a  class="btn btn-danger">BORRAR </a></td>
                  <td> <a  class="btn btn-primary">MODIFICAR </a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </body>`);
          res.write('</html>');
          return res.end();
        }
        if(url === '/customers'){


          res.write('<html>');
          res.write(`<meta charset="UTF-8">`);
          res.write(`<head><title>CUSTOMERS</title>${s}</head>`);
          res.write(`<body>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">NODE JS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/">Home</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/user">User</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/categories">Catogory</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/products">Products</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/employees">Employees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/customers">Customers</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/sales">Sales</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/shopping">Shopping</a>
            </li>
                
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav><br><br>
          <div class="container">
              <h1>Acerca de la empresa</h1>
              <div class="row">
                <div class="col-md-6">
                  <img src="https://img.freepik.com/foto-gratis/laboratorio-computacion-moderno-equipado_23-2149241224.jpg?w=740&t=st=1687753858~exp=1687754458~hmac=f86350d78f4f30179fd0c7877889b8b378db39f26a9b1469cf5c57256511da44" alt="Imagen de la empresa" class="img-fluid"><br><br>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">QUIERO SER SOCIO</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">CLIENTES ASOCIADOS</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <form action="/create-customer" method="POST" >
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">NOMBRE COMPLETO</label>
                                    <input class="form-control" id="message-text" name="create-customer" ></input>
                                  </div>
                                  <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">EMAIL</label>
                                    <input type="email" class="form-control" id="recipient-name" name="create-customer" >
                                  </div>
                                  <button class="btn btn-primary" name="create-customer" type="submit">Send message</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
                <div class="col-md-6">
                  <h2>Misión de la empresa</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, mi sit amet rhoncus dignissim,
                    elit neque consequat ex, a semper felis odio non ante. Morbi sed interdum ligula.</p>

                  <h2>Visión de la empresa</h2>
                  <p>Curabitur luctus tellus in tellus rutrum, et feugiat lectus vulputate. Phasellus vitae ipsum in leo
                    sodales scelerisque ut at leo. Aliquam commodo, dolor nec tempus euismod, lectus justo consectetur
                    lacus.</p>
                </div>
              </div>
  </div>
        
       
        </body>`);
          res.write('</html>');
          return res.end();



        }
        if(url === '/products'){


          res.write('<html>');
          res.write(`<meta charset="UTF-8">`);
          res.write(`<head><title>PRODUCTS</title>${s}</head>`);
          res.write(`<body>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">NODE JS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/">Home</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/user">User</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/categories">Catogory</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/products">Products</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/employees">Employees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/customers">Customers</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/sales">Sales</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/shopping">Shopping</a>
            </li>
                
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav><br><br>
       
        <div class="container">
        <h2>PRODUCTOS VENTAS ARTEMIS</h2><br>
        <table class="table">
          <thead>
            <tr>
              <th>ID PRODUCTO</th>
              <th>NOMBRE</th>
              <th>DESCRIPCIÓN</th>
              <th>PRECIO</th>
              <th>DELETE</th>
              <th>UPDATE</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Camiseta</td>
              <td>Camiseta de algodón para hombre</td>
              <td>$19.99</td>
              <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Zapatos</td>
              <td>Zapatos de cuero para mujer</td>
              <td>$59.99</td>
              <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bolso</td>
              <td>Bolso de mano de cuero genuino</td>
              <td>$39.99</td>
              <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Reloj</td>
              <td>Reloj analógico resistente al agua</td>
              <td>$79.99</td>
              <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Gafas de Sol</td>
              <td>Gafas de sol con montura de metal</td>
              <td>$29.99</td>
              <td> <a  class="btn btn-danger">BORRAR </a></td>
            <td> <a  class="btn btn-primary">MODIFICAR </a></td>
            </tr>
          </tbody>
      
        </table>
      </div>
    
       
        </body>`);
          res.write('</html>');
          return res.end();




        }

        if(url === '/sales'){


          res.write('<html>');
          res.write(`<meta charset="UTF-8">`);
          res.write(`<head><title>SALES</title>${s}</head>`);
          res.write(`<body>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">NODE JS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/">Home</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/user">User</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/categories">Catogory</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/products">Products</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/employees">Employees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/customers">Customers</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/sales">Sales</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/shopping">Shopping</a>
            </li>
                
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav><br><br>
        <div class="container text-center">
        <div class="row">
          <div class="col">
          <div class="card" style="width: 18rem;">
          <img src="https://img.freepik.com/psd-gratis/plantilla-banner-redes-sociales-super-venta-viernes-negro_106176-1470.jpg?w=740&t=st=1687752942~exp=1687753542~hmac=d2e274bb2886b467993fe4eec34b3887bd71423a0067d7073e1730d8f1146950" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          </div>
          <div class="col">
          <div class="card" style="width: 18rem;">
          <img src="https://img.freepik.com/psd-gratis/plantilla-banner-redes-sociales-super-venta-viernes-negro_106176-1471.jpg?w=740&t=st=1687752967~exp=1687753567~hmac=c6cec63f881a98d3ddc5ccd9d48e48c763e511a7e89d02ca1ed3e411b3256ce1" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          </div>
          <div class="col">
          <div class="card" style="width: 18rem;">
          <img src="https://img.freepik.com/vector-gratis/banner-ventas-colorido-abstracto_52683-27970.jpg?w=740&t=st=1687752995~exp=1687753595~hmac=40576207195234057c441efd610e2675af197e4198427a2144a64741cafda6ca" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          </div>
        </div>
      </div>
       
        </body>`);
          res.write('</html>');
          return res.end();




        }

        if(url === '/shopping'){


          res.write('<html>');
          res.write(`<meta charset="UTF-8">`);
          res.write(`<head><title>SHOPING</title>${s}</head>`);
          res.write(`<body>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">NODE JS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/">Home</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/user">User</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/categories">Catogory</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/products">Products</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/employees">Employees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/customers">Customers</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/sales">Sales</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:7000/shopping">Shopping</a>
            </li>
                
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav><br><br>
        <div class="container text-center">
        <div class="row">
          <div class="col">
          <div class="card" style="width: 18rem;">
          <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-programador_114360-2284.jpg?w=740&t=st=1687755825~exp=1687756425~hmac=1f23d4ac093e3fa058f64a7b2a560d3ac905f17107ce3ea86192320c91fc1ab3" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          </div>
          <div class="col">
          <div class="card" style="width: 18rem;">
          <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-camino_114360-1191.jpg?w=740&t=st=1687755875~exp=1687756475~hmac=e1e37ac210b6e48b6cb602a8ce3aafb80307bdb926b9b5556dc803f2e4c5cef1" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          </div>
          <div class="col">
          <div class="card" style="width: 18rem;">
          <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-tour-producto_114360-1342.jpg?w=740&t=st=1687755910~exp=1687756510~hmac=802b9a52dd5bb538f81b097e77045708a215199ece8df376ca70e7caa433588a" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
          </div>
        </div>
      </div>
       
        </body>`);
          res.write('</html>');
          return res.end();




        }
        res.write(`<head>`);
        res.write(`<meta charset="UTF-8">`);
        res.write(`<title></title>`);
        
        res.write(`</head>`);

        res.write(`<body>`);
        
        res.write(`</body>`);
        res.write(`</html>`);
        res.end();
});


server.listen(7000);
