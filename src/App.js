import Directory from './components/directory/directory.component';
import Images from './Images/Images';

const  App = () =>  {
  const categories = [
    {
      id: 1,
      title: 'Beds',
      imageUrl: Images.bed
    },
    {
      id: 2,
      title: 'Couches',
      imageUrl: Images.couch,
    },
    {
      id: 3,
      title: 'Desks',
      imageUrl: Images.desk,
    },
    {
      id: 4,
      title: 'Chairs',
      imageUrl: Images.chair
    },
    {
      id: 5,
      title: 'Appliances',
      imageUrl: Images.appliance
    }
  ];

  return (
    <Directory categories={categories}/>
  );
}

export default App;