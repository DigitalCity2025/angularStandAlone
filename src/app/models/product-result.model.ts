export interface ProductResult {
  code: string;
  errors: any[];
  product: Product;
  result: Result;
  status: string;
  warnings: Warning[];
}

interface Warning {
  field: Field;
  impact: Result;
  message: Result;
}

interface Field {
  id: string;
  value: string;
}

interface Result {
  id: string;
  lc_name: string;
  name: string;
}

interface Product {
  _id: string;
  _keywords: string[];
  added_countries_tags: any[];
  additives_n: number;
  additives_original_tags: string[];
  additives_tags: string[];
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: string[];
  allergens_lc: string;
  allergens_tags: string[];
  amino_acids_prev_tags: any[];
  amino_acids_tags: any[];
  brand_owner: string;
  brand_owner_imported: string;
  brands: string;
  brands_tags: string[];
  categories: string;
  categories_hierarchy: string[];
  categories_imported: string;
  categories_lc: string;
  categories_old: string;
  categories_properties: Categoriesproperties;
  categories_properties_tags: string[];
  categories_tags: string[];
  category_properties: Categoriesproperties;
  checkers: any[];
  checkers_tags: any[];
  ciqual_food_name_tags: string[];
  cities_tags: any[];
  code: string;
  codes_tags: string[];
  compared_to_category: string;
  complete: number;
  completeness: number;
  correctors: string[];
  correctors_tags: string[];
  countries: string;
  countries_hierarchy: string[];
  countries_imported: string;
  countries_lc: string;
  countries_tags: string[];
  created_t: number;
  creator: string;
  data_quality_bugs_tags: any[];
  data_quality_errors_tags: any[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources: string;
  data_sources_imported: string;
  data_sources_tags: string[];
  debug_param_sorted_langs: string[];
  ecoscore_data: Ecoscoredata;
  ecoscore_grade: string;
  ecoscore_tags: string[];
  editors: string[];
  editors_tags: string[];
  emb_codes: string;
  emb_codes_20141016: string;
  emb_codes_orig: string;
  emb_codes_tags: any[];
  entry_dates_tags: string[];
  expiration_date: string;
  food_groups: string;
  food_groups_tags: string[];
  'fruits-vegetables-nuts_100g_estimate': number;
  generic_name: string;
  generic_name_en: string;
  id: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_ingredients_small_url: string;
  image_ingredients_thumb_url: string;
  image_ingredients_url: string;
  image_nutrition_small_url: string;
  image_nutrition_thumb_url: string;
  image_nutrition_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers: string[];
  informers_tags: string[];
  ingredients: Ingredient3[];
  ingredients_analysis: Ingredientsanalysis;
  ingredients_analysis_tags: string[];
  ingredients_debug: (null | string)[];
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  ingredients_from_palm_oil_n: number;
  ingredients_from_palm_oil_tags: any[];
  ingredients_hierarchy: string[];
  ingredients_ids_debug: string[];
  ingredients_lc: string;
  ingredients_n: number;
  ingredients_n_tags: string[];
  ingredients_non_nutritive_sweeteners_n: number;
  ingredients_original_tags: string[];
  ingredients_percent_analysis: number;
  ingredients_sweeteners_n: number;
  ingredients_tags: string[];
  ingredients_text: string;
  ingredients_text_debug: string;
  ingredients_text_en: string;
  ingredients_text_en_imported: string;
  ingredients_text_with_allergens: string;
  ingredients_text_with_allergens_en: string;
  ingredients_that_may_be_from_palm_oil_n: number;
  ingredients_that_may_be_from_palm_oil_tags: any[];
  ingredients_with_specified_percent_n: number;
  ingredients_with_specified_percent_sum: number;
  ingredients_with_unspecified_percent_n: number;
  ingredients_with_unspecified_percent_sum: number;
  ingredients_without_ciqual_codes: string[];
  ingredients_without_ciqual_codes_n: number;
  ingredients_without_ecobalyse_ids: string[];
  ingredients_without_ecobalyse_ids_n: number;
  interface_version_created: string;
  interface_version_modified: string;
  known_ingredients_n: number;
  labels: string;
  labels_hierarchy: string[];
  labels_lc: string;
  labels_old: string;
  labels_tags: string[];
  lang: string;
  languages: Languages;
  languages_codes: Languagescodes;
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  last_updated_t: number;
  lc: string;
  lc_imported: string;
  link: string;
  main_countries_tags: any[];
  manufacturing_places: string;
  manufacturing_places_tags: any[];
  max_imgid: string;
  minerals_prev_tags: any[];
  minerals_tags: any[];
  misc_tags: string[];
  no_nutrition_data: string;
  nova_group: number;
  nova_group_debug: string;
  nova_groups: string;
  nova_groups_markers: Novagroupsmarkers;
  nova_groups_tags: string[];
  nucleotides_prev_tags: any[];
  nucleotides_tags: any[];
  nutrient_levels: Nutrientlevels;
  nutrient_levels_tags: string[];
  nutriments: Nutriments;
  nutriscore: Nutriscore;
  nutriscore_2021_tags: string[];
  nutriscore_2023_tags: string[];
  nutriscore_data: Nutriscoredata;
  nutriscore_grade: string;
  nutriscore_score: number;
  nutriscore_score_opposite: number;
  nutriscore_tags: string[];
  nutriscore_version: string;
  nutrition_data: string;
  nutrition_data_per: string;
  nutrition_data_per_imported: string;
  nutrition_data_prepared: string;
  nutrition_data_prepared_per: string;
  nutrition_data_prepared_per_imported: string;
  nutrition_grade_fr: string;
  nutrition_grades: string;
  nutrition_grades_tags: string[];
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients: number;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
  obsolete: string;
  obsolete_since_date: string;
  origin: string;
  origin_en: string;
  origins: string;
  origins_hierarchy: string[];
  origins_lc: string;
  origins_old: string;
  origins_tags: string[];
  other_nutritional_substances_tags: any[];
  packaging: string;
  packaging_hierarchy: string[];
  packaging_lc: string;
  packaging_materials_tags: any[];
  packaging_old: string;
  packaging_old_before_taxonomization: string;
  packaging_recycling_tags: any[];
  packaging_shapes_tags: string[];
  packaging_tags: string[];
  packaging_text: string;
  packaging_text_en: string;
  packagings: Packaging3[];
  packagings_complete: number;
  packagings_materials: Packagingsmaterials;
  packagings_n: number;
  photographers: string[];
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  popularity_tags: string[];
  product_name: string;
  product_name_en: string;
  product_name_en_imported: string;
  product_quantity: string;
  product_quantity_unit: string;
  product_type: string;
  purchase_places: string;
  purchase_places_tags: any[];
  quantity: string;
  removed_countries_tags: any[];
  rev: number;
  scans_n: number;
  selected_images: Selectedimages;
  serving_quantity: string;
  serving_quantity_unit: string;
  serving_size: string;
  serving_size_imported: string;
  sortkey: number;
  sources: Source[];
  sources_fields: Sourcesfields;
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  stores: string;
  stores_tags: any[];
  teams: string;
  teams_tags: string[];
  traces: string;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy: string[];
  traces_lc: string;
  traces_tags: string[];
  unique_scans_n: number;
  unknown_ingredients_n: number;
  unknown_nutrients_tags: any[];
  update_key: string;
  vitamins_prev_tags: any[];
  vitamins_tags: any[];
  weighers_tags: any[];
}

interface Sourcesfields {
  'org-database-usda': Orgdatabaseusda;
}

interface Orgdatabaseusda {
  available_date: string;
  fdc_category: string;
  fdc_data_source: string;
  fdc_id: string;
  modified_date: string;
  publication_date: string;
}

interface Source {
  fields: string[];
  id: string;
  images: any[];
  import_t: number;
  url: null | string;
  manufacturer?: null;
  name?: string;
}

interface Selectedimages {
  front: Front2;
  ingredients: Front2;
  nutrition: Front2;
}

interface Front2 {
  display: Display;
  small: Display;
  thumb: Display;
}

interface Display {
  en: string;
}

interface Packagingsmaterials {
  all: Categoriesproperties;
  'en:unknown': Categoriesproperties;
}

interface Packaging3 {
  shape: Shape;
}

interface Shape {
  id: string;
}

interface Nutriscoredata {
  components: Components;
  count_proteins: number;
  count_proteins_reason: string;
  grade: string;
  is_beverage: number;
  is_cheese: number;
  is_fat_oil_nuts_seeds: number;
  is_red_meat_product: number;
  is_water: number;
  negative_points: number;
  negative_points_max: number;
  positive_nutrients: string[];
  positive_points: number;
  positive_points_max: number;
  score: number;
}

interface Nutriscore {
  '2021': _2021;
  '2023': _2023;
}

interface _2023 {
  category_available: number;
  data: Data2;
  grade: string;
  nutrients_available: number;
  nutriscore_applicable: number;
  nutriscore_computed: number;
  score: number;
}

interface Data2 {
  components: Components;
  count_proteins: number;
  count_proteins_reason: string;
  is_beverage: number;
  is_cheese: number;
  is_fat_oil_nuts_seeds: number;
  is_red_meat_product: number;
  is_water: number;
  negative_points: number;
  negative_points_max: number;
  positive_nutrients: string[];
  positive_points: number;
  positive_points_max: number;
}

interface Components {
  negative: Negative[];
  positive: Negative[];
}

interface Negative {
  id: string;
  points: number;
  points_max: number;
  unit: string;
  value: number;
}

interface _2021 {
  category_available: number;
  data: Data;
  grade: string;
  nutrients_available: number;
  nutriscore_applicable: number;
  nutriscore_computed: number;
  score: number;
}

interface Data {
  energy: number;
  energy_points: number;
  energy_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: number;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_value: number;
  sodium: number;
  sodium_points: number;
  sodium_value: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
}

interface Nutriments {
  calcium: number;
  calcium_100g: number;
  calcium_serving: number;
  calcium_unit: string;
  calcium_value: number;
  carbohydrates: number;
  carbohydrates_100g: number;
  carbohydrates_serving: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  cholesterol: number;
  cholesterol_100g: number;
  cholesterol_serving: number;
  cholesterol_unit: string;
  cholesterol_value: number;
  energy: number;
  'energy-kcal': number;
  'energy-kcal_100g': number;
  'energy-kcal_serving': number;
  'energy-kcal_unit': string;
  'energy-kcal_value': number;
  'energy-kcal_value_computed': number;
  energy_100g: number;
  energy_serving: number;
  energy_unit: string;
  energy_value: number;
  fat: number;
  fat_100g: number;
  fat_serving: number;
  fat_unit: string;
  fat_value: number;
  fiber: number;
  fiber_100g: number;
  fiber_serving: number;
  fiber_unit: string;
  fiber_value: number;
  'fruits-vegetables-legumes-estimate-from-ingredients_100g': number;
  'fruits-vegetables-legumes-estimate-from-ingredients_serving': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_100g': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_serving': number;
  iron: number;
  iron_100g: number;
  iron_serving: number;
  iron_unit: string;
  iron_value: number;
  'nova-group': number;
  'nova-group_100g': number;
  'nova-group_serving': number;
  'nutrition-score-fr': number;
  'nutrition-score-fr_100g': number;
  proteins: number;
  proteins_100g: number;
  proteins_serving: number;
  proteins_unit: string;
  proteins_value: number;
  salt: number;
  salt_100g: number;
  salt_serving: number;
  salt_unit: string;
  salt_value: number;
  'saturated-fat': number;
  'saturated-fat_100g': number;
  'saturated-fat_serving': number;
  'saturated-fat_unit': string;
  'saturated-fat_value': number;
  sodium: number;
  sodium_100g: number;
  sodium_serving: number;
  sodium_unit: string;
  sodium_value: number;
  sugars: number;
  sugars_100g: number;
  sugars_serving: number;
  sugars_unit: string;
  sugars_value: number;
  'trans-fat': number;
  'trans-fat_100g': number;
  'trans-fat_serving': number;
  'trans-fat_unit': string;
  'trans-fat_value': number;
  'vitamin-a': number;
  'vitamin-a_100g': number;
  'vitamin-a_serving': number;
  'vitamin-a_unit': string;
  'vitamin-a_value': number;
  'vitamin-c': number;
  'vitamin-c_100g': number;
  'vitamin-c_serving': number;
  'vitamin-c_unit': string;
  'vitamin-c_value': number;
}

interface Nutrientlevels {
  fat: string;
  salt: string;
  'saturated-fat': string;
  sugars: string;
}

interface Novagroupsmarkers {
  '3': string[][];
  '4': string[][];
}

interface Languagescodes {
  en: number;
}

interface Languages {
  'en:english': number;
}

interface Ingredientsanalysis {
  'en:palm-oil-content-unknown': string[];
  'en:vegan-status-unknown': string[];
  'en:vegetarian-status-unknown': string[];
}

interface Ingredient3 {
  id: string;
  ingredients: Ingredient2[];
  is_in_taxonomy: number;
  percent_estimate: number;
  percent_max: number;
  percent_min: number;
  text: string;
  vegan?: string;
  vegetarian?: string;
}

interface Ingredient2 {
  ciqual_food_code?: string;
  ecobalyse_code?: string;
  id: string;
  is_in_taxonomy: number;
  percent_estimate: number;
  percent_max: number;
  percent_min: number;
  text: string;
  vegan: string;
  vegetarian: string;
  ciqual_proxy_food_code?: string;
  ingredients?: Ingredient[];
  from_palm_oil?: string;
}

interface Ingredient {
  ciqual_food_code?: string;
  id: string;
  is_in_taxonomy: number;
  percent_estimate: number;
  percent_max: number;
  percent_min: number;
  text: string;
  vegan: string;
  vegetarian: string;
  ciqual_proxy_food_code?: string;
}

interface Images {
  '1': _1;
  '2': _1;
  '3': _1;
  '4': _1;
  '5': _1;
  front: Front;
  front_en: Front;
  ingredients: Ingredients;
  ingredients_en: Ingredients;
  nutrition: Ingredients;
  nutrition_en: Ingredients;
}

interface Ingredients {
  geometry: string;
  imgid: string;
  normalize: string;
  rev: string;
  sizes: Sizes2;
  white_magic: null;
}

interface Front {
  geometry: string;
  imgid: string;
  normalize: null;
  rev: string;
  sizes: Sizes2;
  white_magic: null;
}

interface Sizes2 {
  '100': _100;
  '200': _100;
  '400': _100;
  full: _100;
}

interface _1 {
  sizes: Sizes;
  uploaded_t: number;
  uploader: string;
}

interface Sizes {
  '100': _100;
  '400': _100;
  full: _100;
}

interface _100 {
  h: number;
  w: number;
}

interface Ecoscoredata {
  adjustments: Adjustments;
  agribalyse: Agribalyse;
  grade: string;
  missing: Missing;
  missing_agribalyse_match_warning: number;
  scores: Categoriesproperties;
  status: string;
}

interface Missing {
  agb_category: number;
  labels: number;
  packagings: number;
}

interface Agribalyse {
  warning: string;
}

interface Adjustments {
  origins_of_ingredients: Originsofingredients;
  packaging: Packaging2;
  production_system: Productionsystem;
  threatened_species: Categoriesproperties;
}

interface Productionsystem {
  labels: any[];
  value: number;
  warning: string;
}

interface Packaging2 {
  non_recyclable_and_non_biodegradable_materials: number;
  packagings: Packaging[];
  score: number;
  value: number;
  warning: string;
}

interface Packaging {
  environmental_score_material_score: number;
  environmental_score_shape_ratio: number;
  material: string;
  shape: string;
}

interface Originsofingredients {
  aggregated_origins: Aggregatedorigin[];
  epi_score: number;
  epi_value: number;
  origins_from_categories: string[];
  origins_from_origins_field: string[];
  transportation_score: number;
  transportation_scores: Transportationscores;
  transportation_value: number;
  transportation_values: Transportationscores;
  value: number;
  values: Transportationscores;
}

interface Transportationscores {
  ad: number;
  al: number;
  at: number;
  ax: number;
  ba: number;
  be: number;
  bg: number;
  ch: number;
  cy: number;
  cz: number;
  de: number;
  dk: number;
  dz: number;
  ee: number;
  eg: number;
  es: number;
  fi: number;
  fo: number;
  fr: number;
  gg: number;
  gi: number;
  gr: number;
  hr: number;
  hu: number;
  ie: number;
  il: number;
  im: number;
  is: number;
  it: number;
  je: number;
  lb: number;
  li: number;
  lt: number;
  lu: number;
  lv: number;
  ly: number;
  ma: number;
  mc: number;
  md: number;
  me: number;
  mk: number;
  mt: number;
  nl: number;
  no: number;
  pl: number;
  ps: number;
  pt: number;
  ro: number;
  rs: number;
  se: number;
  si: number;
  sj: number;
  sk: number;
  sm: number;
  sy: number;
  tn: number;
  tr: number;
  ua: number;
  uk: number;
  us: number;
  va: number;
  world: number;
  xk: number;
}

interface Aggregatedorigin {
  epi_score: string;
  origin: string;
  percent: number;
  transportation_score: number;
}

interface Categoriesproperties {
}