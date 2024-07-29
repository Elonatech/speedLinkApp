import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import Industries from '@/components/Industries';
import Products from '@/components/products';
import CaseStudies from '@/components/CaseStudies';
import TechnologyStack from '@/components/TechnologyStack';
import TopClients from '@/components/TopClients';
import Contact from '@/components/Contacts';
import Footer from '@/components/Footer';

const MemoizedTopBar = React.memo(TopBar);
const MemoizedNavbar = React.memo(Navbar);
const MemoizedHeroSection = React.memo(HeroSection);
const MemoizedServiceSection = React.memo(ServiceSection);
const MemoizedIndustries = React.memo(Industries);
const MemoizedProducts = React.memo(Products);
const MemoizedCaseStudies = React.memo(CaseStudies);
const MemoizedTechnologyStack = React.memo(TechnologyStack);
const MemoizedTopClients = React.memo(TopClients);
const MemoizedContact = React.memo(Contact);

const components = [
  { key: 'TopBar', component: <MemoizedTopBar /> },
  { key: 'Navbar', component: <MemoizedNavbar /> },
  { key: 'HeroSection', component: <MemoizedHeroSection /> },
  { key: 'ServiceSection', component: <MemoizedServiceSection /> },
  { key: 'Industries', component: <MemoizedIndustries /> },
  { key: 'Products', component: <MemoizedProducts /> },
  { key: 'CaseStudies', component: <MemoizedCaseStudies /> },
  { key: 'TechnologyStack', component: <MemoizedTechnologyStack /> },
  { key: 'TopClients', component: <MemoizedTopClients /> },
  { key: 'Contact', component: <MemoizedContact /> },
];

interface RenderItemProps {
  item: { key: string; component: React.ReactElement };
}

const RenderItem: React.FC<RenderItemProps> = React.memo(({ item }) => (
  <View>{item.component}</View>
));

const Index: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={components}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.flatList}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList: {
    flexGrow: 1,
    paddingBottom: 60, 
  },
});

export default Index;