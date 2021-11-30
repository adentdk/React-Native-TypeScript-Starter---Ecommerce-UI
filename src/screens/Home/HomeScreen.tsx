import * as React from 'react';
import {withTranslation} from 'react-i18next';
import {Image, ScrollView, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Card from '../../components/Card';
import MustLoginModal from '../../components/MustLoginModal';
import NewsCard from '../../components/NewsCard';
import OutlinedButton from '../../components/OutlinedButton';
import ProductCard from '../../components/ProductCard';
import ProductPromotionCard from '../../components/ProductPromotionCard';
import ScreenWrapper from '../../components/ScreenWrapper';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';

import {palettes, useTheme} from '../../themes';
import {lighterColor} from '../../utils/color';

import {IHome} from './Home';
import useStyles from './styles';

export const HomeScreen: React.FC<IHome.IProps> = ({t}) => {
  const {theme} = useTheme();
  const styles = useStyles(theme);

  React.useEffect(() => {}, []);

  return (
    <>
      <ScreenWrapper
        component="scroll"
        statusBarColor={palettes.white}
        statusBarStyle="dark-content"
        style={styles.container}>
        <View style={styles.mainSection}>
          <TextInput
            containerStyle={styles.searchBar}
            placeholder={t('Search Product')}
          />

          {/* Carousel */}
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            bounces={false}
            alwaysBounceHorizontal={false}
            pagingEnabled
            style={styles.carouselWrapper}>
            <View style={styles.carouselItem}>
              <Image
                source={require('../../assets/images/Promo.png')}
                style={styles.carouselItemImage}
              />
            </View>
            <View style={styles.carouselItem}>
              <Image
                source={require('../../assets/images/Promo.png')}
                style={styles.carouselItemImage}
              />
            </View>
            <View style={styles.carouselItem}>
              <Image
                source={require('../../assets/images/Promo.png')}
                style={styles.carouselItemImage}
              />
            </View>
            <View style={styles.carouselItem}>
              <Image
                source={require('../../assets/images/Promo.png')}
                style={styles.carouselItemImage}
              />
            </View>
            <View style={styles.carouselItem}>
              <Image
                source={require('../../assets/images/Promo.png')}
                style={styles.carouselItemImage}
              />
            </View>
            <View style={styles.carouselItem}>
              <Image
                source={require('../../assets/images/Promo.png')}
                style={styles.carouselItemImage}
              />
            </View>
          </ScrollView>

          <Card
            style={styles.categoriesWrapper}
            title={t('Categories')}
            actionText={t('See All')}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              bounces={false}
              alwaysBounceHorizontal={false}
              style={styles.categoryList}>
              {CATEGORIES_DATA.map((category, index) => (
                <View key={index} style={styles.categoryItem}>
                  <View
                    style={[
                      styles.categoryIconWrapper,
                      {backgroundColor: lighterColor(category.color, 0.72)},
                    ]}>
                    <IonIcon
                      name={category.icon}
                      size={24}
                      color={category.color}
                    />
                  </View>
                  <Text fontFamily="medium" fontSize="sm">
                    {t(category.name)}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </Card>
        </View>
        <View style={styles.productSection}>
          <Card
            style={styles.productsWrapper}
            title={t('Featured Product')}
            actionText={t('See All')}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              bounces={false}
              alwaysBounceHorizontal={false}
              pagingEnabled>
              {PRODUCTS_DATA.map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={{uri: product.image}}
                  totalReviews={product.totalReviews}
                  rating={product.rating}
                  style={[
                    styles.productCardItem,
                    index === 0 && styles.productCardItemFirst,
                  ]}
                />
              ))}
            </ScrollView>
          </Card>

          <ProductPromotionCard
            style={styles.productPromotionCard}
            title="C02 - Cable Multifunction"
            image={{
              uri: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/c02-min-N2kKQduP-zoom.png',
            }}
          />

          <Card
            style={styles.productsWrapper}
            title={t('Best Sellers')}
            actionText={t('See All')}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              bounces={false}
              alwaysBounceHorizontal={false}
              pagingEnabled>
              {PRODUCTS_DATA.map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={{uri: product.image}}
                  totalReviews={product.totalReviews}
                  rating={product.rating}
                  style={[
                    styles.productCardItem,
                    index === 0 && styles.productCardItemFirst,
                  ]}
                />
              ))}
            </ScrollView>
          </Card>

          <ProductPromotionCard
            style={styles.productPromotionCard}
            title="C02 - Cable Multifunction"
            image={{
              uri: 'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/c02-min-N2kKQduP-zoom.png',
            }}
            color={palettes.blueOcean}
          />

          <Card
            style={styles.productsWrapper}
            title={t('New Arrivals')}
            actionText={t('See All')}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              bounces={false}
              alwaysBounceHorizontal={false}
              pagingEnabled>
              {PRODUCTS_DATA.map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={{uri: product.image}}
                  totalReviews={product.totalReviews}
                  rating={product.rating}
                  style={[
                    styles.productCardItem,
                    index === 0 && styles.productCardItemFirst,
                  ]}
                />
              ))}
            </ScrollView>
          </Card>
          <Card
            style={styles.productsWrapper}
            title={t('Top Rated Products')}
            actionText={t('See All')}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              bounces={false}
              alwaysBounceHorizontal={false}
              pagingEnabled>
              {PRODUCTS_DATA.map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={{uri: product.image}}
                  totalReviews={product.totalReviews}
                  rating={product.rating}
                  style={[
                    styles.productCardItem,
                    index === 0 && styles.productCardItemFirst,
                  ]}
                />
              ))}
            </ScrollView>
          </Card>
          <Card
            style={styles.productsWrapper}
            title={t('Special Offers')}
            actionText={t('See All')}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              bounces={false}
              alwaysBounceHorizontal={false}
              pagingEnabled>
              {PRODUCTS_DATA.map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={{uri: product.image}}
                  totalReviews={product.totalReviews}
                  rating={product.rating}
                  style={[
                    styles.productCardItem,
                    index === 0 && styles.productCardItemFirst,
                  ]}
                />
              ))}
            </ScrollView>
          </Card>
        </View>
        <View style={styles.footer}>
          <Card title={t('Latest News')}>
            {NEWS_DATA.map((news, index) => (
              <NewsCard
                key={index}
                title={news.title}
                description={news.description}
                image={news.image}
                timestamp={news.timestamp}
                style={[
                  styles.newsCardItem,
                  index === 0 && styles.newsCardItemFirst,
                ]}
              />
            ))}

            <OutlinedButton title="See All News" style={styles.outterButton} />
          </Card>
        </View>
      </ScreenWrapper>
      <MustLoginModal />
    </>
  );
};

export default withTranslation('translation')(HomeScreen);

const CATEGORIES_DATA = [
  {
    id: 1,
    name: 'Foods',
    icon: 'fast-food-outline',
    color: palettes.earthGreen,
  },
  {
    id: 2,
    name: 'Electronics',
    icon: 'desktop-outline',
    color: palettes.redVelvet,
  },
  {
    id: 3,
    name: 'Fashion',
    icon: 'shirt-outline',
    color: palettes.orangeFresh,
  },
  {
    id: 4,
    name: 'Home',
    icon: 'home-outline',
    color: palettes.earthGreen,
  },
  {
    id: 5,
    name: 'Health',
    icon: 'heart-outline',
    color: palettes.redVelvet,
  },
];

const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'TMA-1 HD Wireless',
    price: 1500000,
    rating: 4.6,
    totalReviews: 86,
    image:
      'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/6/11/beb952c3-9381-4291-825d-5d3da2d8ecbb.jpg',
  },
  {
    id: 2,
    name: 'TMA-2 HD Wireless',
    price: 1500000,
    rating: 4.6,
    totalReviews: 86,
    image:
      'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/c02-min-N2kKQduP-zoom.png',
  },
  {
    id: 3,
    name: 'TMA-3 HD Wireless',
    price: 1500000,
    rating: 4.6,
    totalReviews: 86,
    image:
      'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/6/11/beb952c3-9381-4291-825d-5d3da2d8ecbb.jpg',
  },
  {
    id: 4,
    name: 'TMA-4 HD Wireless',
    price: 1500000,
    rating: 4.6,
    totalReviews: 86,
    image:
      'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/c02-min-N2kKQduP-zoom.png',
  },
];

const NEWS_DATA = [
  {
    id: 1,
    title: 'Philosophy That Addresses Topics Such As Goodness',
    description: 'Agar tetap kinclong, bodi motor ten...',
    image: {uri: 'https://picsum.photos/200/300'},
    timestamp: '29 January 2022',
  },
  {
    id: 2,
    title: 'Philosophy That Addresses Topics Such As Goodness',
    description: 'Agar tetap kinclong, bodi motor ten...',
    image: {uri: 'https://picsum.photos/200/300'},
    timestamp: '29 January 2022',
  },
  {
    id: 3,
    title: 'Philosophy That Addresses Topics Such As Goodness',
    description: 'Agar tetap kinclong, bodi motor ten...',
    image: {uri: 'https://picsum.photos/200/300'},
    timestamp: '29 January 2022',
  },
];
