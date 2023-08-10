const songMap = {
	"diamorphone": "diamorphone.html",
	"all_the_saints": "all_the_saints.html",
	"almost_brooklyn": "almost_brooklyn.html",
	"angels": "angels.html",
	"angel_station": "angel_station.html",
	"animals": "animals.html",
	"bad_dream_lover": "bad_dream_lover.html",
	"bakersfield": "bakersfield.html",
	"baltic": "baltic.html",
	"beetle_george": "beetle_george.html",
	"ben": "ben.html",
	"bicycle_kid": "bicycle_kid.html",
	"big_bad_thing": "big_bad_thing.html",
	"big_cats": "big_cats.html",
	"bigfoot_motel": "bigfoot.html",
	"big_old_wind": "big_old_wind.html",
	"big_saturday": "big_saturday.html",
	"black_raoul": "black_raoul.html",
	"blame": "blame.html",
	"blues_for_dean_read": "blues_for_dean_read.html",
	"buffalo_shame": "buffalo_shame.html",
	"burglar_of_love": "burglar_of_love.html",
	"call_me": "call_me.html",
	"caroline_wheeler's_birthday_present": "caroline_wheeler.html",
	"melanie_hargreaves'_father's_jaguar": "melanie_hargreave.html",
	"amalfi_coast_may_1963": "amalfi_coast.html",
	"chickentown": "chickentown.html",
	"chinatown": "chinatown.html",
	"city_of_night": "city_of_night.html",
	"come_on,_marie": "come_on_marie.html",
	"conspiracy": "conspiracy.html",
	"cops_and_hospitals": "cops_and_hospitals.html",
	"count_me_out": "count_me_out.html",
	"cowgirl_fever": "cowgirl_fever.html",
	"cute_submarines": "cute_submarines.html",
	"daycare_nation": "daycare_nation.html",
	"death_dentist": "death_dentist.html",
	"the_devil_is_my_friend": "devil_is_my_friend.html",
	"diamorphine": "diamorphine.html",
	"domestic_animal": "domestic_animal.html",
	"down_the_drain": "down_the_drain.html",
	"d.r.i.n.k.": "drink.html",
	"after_the_greeat_euphrates": "euphrates.html",
	"excellent!": "excellent.html",
	"falling_in_love": "falling_in_love.html",
	"fertiliser": "fertiliser.html",
	"our_friends_the_filth": "filth.html",
	"forever": "forever.html",
	"get_it_wrong": "get_it_wrong.html",
	"ghosts": "ghosts.html",
	"girlfriend": "girlfriend.html",
	"girl-go": "girl_go.html",
	"girls_say_yes": "girls_say_yes.html",
	"gloop_jiving": "gloop_jiving.html",
	"girls_who_keep_goldfish": "goldfish.html",
	"great_elephants": "great_elephants.html",
	"a_great_visitation_of_elephants": "great_elephants.html",
	"grey_flannelette": "grey_flannelette.html",
	"grooving_in_the_bus_lane": "grooving_in_the_bus_lane.html",
	"hairbrush_and_tank": "hairbrush_and_tank.html",
	"hard": "hard.html",
	"harlan": "harlan.html",
	"holiday": "holiday.html",
	"honey": "honey.html",
	"the_human_jungle": "human_jungle.html",
	"hungarian_love_song": "hungarian_love_song.html",
	"hysteria": "hysteria.html",
	"i_hate_love": "i_hate_love.html",
	"i_need_meat": "i_need_meat.html",
	"it_has_to_be_you": "it_has_to_be_you.html",
	"jazz_butcher_-v-_count_dracula": "count_dracula.html",
	"jazz_butcher_theme": "jb_theme.html",
	"jazz_butcher_-v-_prime_minister": "jb_v_pm.html",
	"just_like_bettie_page": "betty_page.html",
	"keeping_the_curtains_closed": "curtains.html",
	"kids_in_the_mall": "kids_in_the_mall.html",
	"killed_out": "killed_out.html",
	"la_mer": "la_mer.html",
	"land": "land.html",
	"last_of_the_gentleman_adventurers": "last_of_the_gentleman_adventurers.html",
	"line_of_death": "line_of_death.html",
	"living_in_a_village": "living_in_a_village.html",
	"looking_for_lot_49": "lot_49.html",
	"lost_in_france": "lost_in_france.html",
	"love_kittens": "love_kittens.html",
	"lulu's_nightmare": "lulus_nightmare.html",
	"marnie": "marnie.html",
	"mercy": "mercy.html",
	"mind_like_a_playgroup": "mind_like_a_playgroup.html",
	"mister_siberia": "mister_siberia.html",
	"monkeyface": "monkeyface.html",
	"mr._odd": "mr_odd.html",
	"mister_odd": "mr_odd.html",
	"my_desert": "my_desert.html",
	"my_zeppelin": "my_zeppelin.html",
	"new_invention": "new_invention.html",
	"next_move_sideways": "next_move_sideways.html",
	"niagara": "niagara.html",
	"nightmare_being": "nightmare_being.html",
	"nothing_special": "nothing_special.html",
	"old_snakey": "old_snakey.html",
	"olof_palme": "olof_palme.html",
	"out_of_touch": "out_of_touch.html",
	"panic_in_room_109": "panic.html",
	"partytime": "partytime.html",
	"penguins": "penguins.html",
	"peter_lorre": "peter_lorre.html",
	"pineapple_tuesday": "pineapple_tuesday.html",
	"poisoned_by_food": "poisoned_by_food.html",
	"president_chang": "president_chang.html",
	"president_reagan's_birthday_present": "president_reagan.html",
	"racheland": "racheland.html",
	"rain": "rain.html",
	"real_men": "real_men.html",
	"rebecca_wants_her_bike_back": "rebecca.html",
	"red_pets": "red_pets.html",
	"rosemary_davis'_world_of_sound": "rosemary_davis.html",
	"only_a_rumour": "rumour.html",
	"saints_prayer": "saints_prayer.html",
	"scarlett": "scarlett.html",
	"sex_engine": "sex_engine.html",
	"shame_about_you": "shame_about_you.html",
	"she's_a_yo-yo": "shes_a_yo_yo.html",
	"she's_on_drugs": "shes_on_drugs.html",
	"shirley_maclaine": "shirley.html",
	"sister_death": "sister_death.html",
	"sixteen_years": "sixteen_years.html",
	"sleepwalking": "sleepwalking.html",
	"southern_mark_smith": "smith.html",
	"beautiful_snow-white_hair": "snowy.html",
	"solar_core": "solar_core.html",
	"soul_happy_hour": "soul_happy_hour.html",
	"south_america": "south_america.html",
	"still_&_all": "still_and_all.html",
	"still_in_the_kitchen": "still_in_the_kitchen.html",
	"surf_gear_in_idaho": "surf_gear_in_idaho.html",
	"susie": "susie.html",
	"sweetwater": "sweet_water.html",
	"swell": "swell.html",
	"the_ballad_of_tiny_and_clyde": "the_ballad_of_tiny_and_clyde.html",
	"the_best_way": "best_way.html",
	"the_good_ones": "the_good_ones.html",
	"the_new_world": "the_new_world.html",
	"the_one_you_adore": "the_one_you_adore.html",
	"the_onion_field": "the_onion_field.html",
	"thing": "thing.html",
	"tomb&eacute;_dans_les_pommes": "tombe_dans_les_pomes.html",
	"tough_priest": "tough_priest.html",
	"truck_o_fear": "truck_o_fear.html",
	"true_stories": "true_stories.html",
	"turtlebait": "turtlebait.html",
	"the_ugliest_song_in_the_world": "ugly_song.html",
	"vienna_song": "vienna_song.html",
	"vodka_girls": "vodka_girls.html",
	"waiting_for_sumo": "waiting_for_sumo.html",
	"walk_with_the_devil": "walk_with_the_devil.html",
	"water": "water.html",
	"whaddya?": "whaddya.html",
	"what's_the_matter,_boy?": "whats_the_matter_boy.html",
	"when_eno_sings": "when_eno_sings.html",
	"whitfield": "whitfield.html",
	"who_loves_you_now?": "who_loves_you_now.html",
	"word_i_was_looking_for": "word_i_was_looking_for.html",
	"christmas_with_the_pygmies": "xmas_with_the_pygmies.html",
	"baby,_it's_you": "baby_its_you.html",
	"the_basement": "basement_theme.html",
	"bath_of_bacon": "bath.html",
	"bubonic_plague": "bubonic_plague.html",
	"zombie_love": "zombie_love.html",
	"brian_wilson": "shakey.html",
	"shakey": "shakey.html",

	"battle_time_now": "wilson_battle_time_now.html",
	"buffalo_sniper": "wilson_buffalo_sniper.html",
	"burn,_hollywood_burn": "wilson_burn_hollywood_burn.html",
	"critters": "wilson_critters.html",
	"dark_agenda": "wilson_dark_agenda.html",
	"every_saturday_night": "wilson_every_saturday_night.html",
	"hippy_shit": "wilson_hippy_shit.html",
	"istanbul_connection": "wilson_istanbul_connection.html",
	"no_winners": "wilson_no_winners.html",
	"police_chief": "wilson_police_chief.html",
	"quality_people": "wilson_quality_people.html",
	"secret_government": "wilson_secret_government.html",
	"yellow_pages": "wilson_yellow_pages.html",

	"come,_friendly_spacemen": "sumosonic_come_friendly_spacemen.html",
	"god's_green_earth": "sumosonic_gods_green_earth.html",
	"monks_of_kung_fu": "sumosonic_monks_of_kung_fu.html",
	"business_and_work": "sumosonic_business_and_work.html",
	"destroy_all_monsters": "sumosonic_destroy_all_monsters.html",
	"stupid": "sumosonic_stupid.html",
	"everything_is_wonderful": "sumosonic_everything_is_wonderful.html",
	"fern_schnell_gut": "sumosonic_fern_schnell_gut.html",
	"cat's_life": "sumosonic_cats_life.html",
	"my_ultimate_baby": "sumosonic_my_ultimate_baby.html",
	"we_are_the_traffic": "sumosonic_we_are_the_traffic.html",
	"sputnik": "sumosonic_sputnik.html",
	"radio_saigon": "sumosonic_radio_saigon.html",
	"hey,_star": "sumosonic_hey_star.html",

	"melanie_hargreaves'_father's_jaguar": "melanie_hargreave.html",
	"time": "time.html",
	"sea_madness": "sea_madness.html",
	"never_give_up": "never_give_up.html",
	"amalfi_coast": "amalfi_coast.html",
	"running_on_fumes": "running_on_fumes.html",
	"the_highest_in_the_land": "highest_in_the_land.html",
	"sebastian's_medication": "sebastians_medication.html",
	"goodnight_sweetheart": "goodnight_sweetheart.html",
	"wildlife": "wildlife.html",
}

export default songMap;
