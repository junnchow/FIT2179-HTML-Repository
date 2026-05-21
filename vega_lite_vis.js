// Helper for consistent embed options
const embedOptions = {
    actions: false,
    renderer: "svg" // sharp rendering
};

// SECTION 1: Domestic League Insights
vegaEmbed("#map_chart", "map.json", embedOptions).catch(console.error);
vegaEmbed("#wins_chart", "domestic_wins.json", embedOptions).catch(console.error);

// SECTION 2: International & Regional History
vegaEmbed("#goals_chart", "goal_histogram.json", embedOptions).catch(console.error);
vegaEmbed("#battle_chart", "asean_battle.json", embedOptions).catch(console.error);
vegaEmbed("#goal_difference_chart", "goal_difference.json", embedOptions).catch(console.error);
vegaEmbed("#home_away_chart", "home_away_winrate.json", embedOptions).catch(console.error);

// SECTION 3: Regional Rivalry Dynamics & Player Analysis
vegaEmbed("#matrix_chart", "head_to_head_matrix.json", embedOptions).catch(console.error);
vegaEmbed("#lollipop_chart", "win_rate_lollipop.json", embedOptions).catch(console.error);
vegaEmbed("#top_scorers_chart", "top_scorers.json", embedOptions).catch(console.error);
vegaEmbed("#tournament_chart", "tournament_donut.json", embedOptions).catch(console.error);