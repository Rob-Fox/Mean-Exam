var express = require('express');
var session = require('express-session');
var flash = require('express-flash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/commerce_DB');
var connection = mongoose.createConnection('mongodb://localhost/commerce_DB');
autoIncrement.initialize(connection);
var ProductSchema = new mongoose.Schema({
    ID: {type: Number, required: true},
    Name: {type: String, required: [true, 'A product must have a name'], minlength: [3, 'Name must be at least 3 characters']},
    quantity: {type: Number, required: [true, 'Products must have a quantity'], min: [0, 'Quantity must be at least Zero']},
    price: {type: Number, required: [true, 'Products must have a price'], min: [0, 'Product price must be greater than or equal to Zero']},
});
mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');
ProductSchema.plugin(autoIncrement.plugin, { model: 'Product', field: 'ID', startAt: 1 } );
var app = express();
app.use(flash());
app.use(session({ secret: 'this is bullshit' }));
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './hello-angular/dist/hello-angular')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/products', function(req, res){
    console.log('Getting all products');
    Product.find({}, function(err, product){
        if(err){
            console.log('Error finding all products: ', err);
        }
        else{
            res.json({message: 'Here are all products: ', data: product})
        }
    })
});


app.get('/products/:id', function(req, res){
    console.log('Getting product with id of ' + req.params.id);
    Product.findOne({ID: req.params.id}, function(err, product){
        if(err){
            console.log('Error finding product with id of ' + req.params.id, err);
        }
        else{
            res.json({message: 'Here is the product with id of' + req.params.id, data: product})
        }
    })
});

app.post('/products', function (req, res) {
    console.log('made it to server');
    console.log('Creating a product');
    console.log(req.body.Name);
    var product = new Product({
        Name: req.body.Name,
        quantity: req.body.quantity,
        price: req.body.price,
    });
    console.log(product);
    product.save(function(err){
        if(err){
            console.log('Error!', err);
            return res.json({ message: 'Error', error: err });
        }
        else{
            console.log('here I am');
            res.json({ data: product});
        }
    })
    // return product;
});

app.put('/products/:id', function(req, res){
    console.log('Updating product with id of ' + req.params.id);
    Product.update({ID: req.params.id}, {$set: {
                Name: req.body.Name,
                quantity: req.body.quantity,
                price: req.body.price,
            }}, { runValidators: true }, function(err){
                if(err){
                    console.log('There was a problem', err);
                    res.json({message:'There was a problem updating', error: err});
                }
                else{
                    console.log()
                    res.json({message: 'Product Updated '})
                }
    })
            
})

app.delete('/products/:id', function(req,res){
    console.log('Deleting product with ID of ' + req.params.id);
    Product.remove({ID: req.params.id}, function(err){
        if(err){
            console.log('Error deleting specified product: ', err);
            res.json({message: 'Error deleting product', err});
        }
        else{
            res.json({message: 'Successfully deleted product'});
        }
    })
})

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/index.html'))
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})