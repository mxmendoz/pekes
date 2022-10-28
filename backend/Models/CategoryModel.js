import mongoose from 'mongoose';

const categorySchema = mongoose.Schema(
  {
    cat: {
      type: String,
      required: true,
    },
    subcat: {
      type: String,
      required: true,
    },
    subcat2: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
