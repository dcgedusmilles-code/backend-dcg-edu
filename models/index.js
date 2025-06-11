const Service = require("./serviceModel");
const ServiceCategory = require("./serviceCatModel");
const Product = require("./productModel");
const Rating = require("./ratingModel");
const User = require("./userModel");
const Project = require("./projectModel");
const CategoryProject = require("./projectCategoryModel");
const ProductCategory = require("./productCategoryModel");
const Order = require("./orderModel");
const OrderItem = require("./orderItemModel");
const Cart = require("./cartModel");
const CartProduct = require("./cartProductModel");
const Image = require('./imageModel');
const Brand = require('./brandModel');
const Blog = require('./blogModel');
const BCategory = require('./blogCatModel');
const BlogCategory = require("./blogCategoryModel");

// Associations

ProductCategory.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(ProductCategory, { foreignKey: "categoryId" });

Product.hasMany(Rating, { foreignKey: "productId" });
Rating.belongsTo(Product, { foreignKey: "productId" });

User.hasMany(Rating, { foreignKey: "userId" });
Rating.belongsTo(User, { foreignKey: "userId" });

ServiceCategory.hasMany(Service, { foreignKey: "categoryId" });
Service.belongsTo(ServiceCategory, { foreignKey: "categoryId" });

CategoryProject.hasMany(Project, { foreignKey: "categoryId" });
Project.belongsTo(CategoryProject, { foreignKey: "categoryId" });

// Um pedido pertence a um usuário
Order.belongsTo(User, { foreignKey: "userId", as: "orderby" });

// Relacionamento entre pedido e produtos (muitos para muitos com extras)
Order.belongsToMany(Product, {
  through: OrderItem,
  foreignKey: "orderId",
  otherKey: "productId",
  as: "products",
});
Product.belongsToMany(Order, {
  through: OrderItem,
  foreignKey: "productId",
  otherKey: "orderId",
});
OrderItem.belongsTo(Product, { foreignKey: "productId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });



// Cart pertence a um usuário
Cart.belongsTo(User, { foreignKey: "orderby" });
User.hasMany(Cart, { foreignKey: "orderby" });

// Relacionamento N:N entre Cart e Product usando CartProduct
Cart.belongsToMany(Product, {
  through: CartProduct,
  foreignKey: "cartId",
});

Product.belongsToMany(Cart, {
  through: CartProduct,
  foreignKey: "productId",
});


// Relação Brand → Image
Brand.belongsTo(Image, { foreignKey: 'imageId', as: 'image' });

// associacoes
Blog.belongsToMany(Image, {
  through: 'blog_images',
  foreignKey: 'blogId',
  otherKey: 'imageId',
  as: 'images',
});
Image.belongsToMany(Blog, {
  through: 'blog_images',
  foreignKey: 'imageId',
  otherKey: 'blogId',
  as: 'blogs',
});


// Blog -> Categoria
Blog.belongsTo(BCategory, { foreignKey: 'categoryId', as: 'category' });
BCategory.hasMany(Blog, { foreignKey: 'categoryId' });

// Blog <-> User (likes e dislikes como N:N)
Blog.belongsToMany(User, {
  through: 'blog_likes',
  as: 'likedBy',
  foreignKey: 'blogId',
});
User.belongsToMany(Blog, {
  through: 'blog_likes',
  as: 'likes',
  foreignKey: 'userId',
});

Blog.belongsToMany(User, {
  through: 'blog_dislikes',
  as: 'dislikedBy',
  foreignKey: 'blogId',
});
User.belongsToMany(Blog, {
  through: 'blog_dislikes',
  as: 'dislikes',
  foreignKey: 'userId',
});

User.hasMany(Wishlist, { as: "wishlist", foreignKey: "userId" });
Wishlist.belongsTo(User, { foreignKey: "userId" });


Cart.belongsToMany(Product, { through: CartItem, as: 'products', foreignKey: 'cartId' });
Product.belongsToMany(Cart, { through: CartItem, as: 'carts', foreignKey: 'productId' });


User.belongsToMany(Product, { as: 'wishlist', through: 'UserWishlist' });
Product.belongsToMany(User, { through: 'UserWishlist' });

User.hasMany(Rating);
Rating.belongsTo(User);

Product.hasMany(Rating);
Rating.belongsTo(Product);


Blog.belongsTo(BlogCategory, { foreignKey: "categoryId" });
Blog.belongsToMany(User, { through: "BlogLikes", as: "likes" });
Blog.belongsToMany(User, { through: "BlogDislikes", as: "dislikes" });
User.belongsToMany(Blog, { through: "BlogLikes", as: "likedBlogs" });
User.belongsToMany(Blog, { through: "BlogDislikes", as: "dislikedBlogs" });

Service.belongsTo(ServiceCategory, { foreignKey: "categoryId", as: "category" });
ServiceCategory.hasMany(Service, { foreignKey: "categoryId", as: "services" });