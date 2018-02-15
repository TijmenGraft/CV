$(document).ready(function() {
	$('.navigation-div').on('click', function(e) {
		e.preventDefault();
		$.ajax({

		})
	});
});

SELECT *
FROM (
  SELECT *
  FROM (
    SELECT *
    FROM yourtable a
    WHERE (
      SELECT COUNT(*)
      FROM yourtable
      WHERE (parentid = a.parentid AND parentid IS NOT NULL AND a.parentid IS NOT NULL)
      AND creationdate <= a.creationdate
    ) <= 2 AND a.parentid IS NOT NULL
    UNION 
    SELECT * 
    FROM (
        SELECT *
        FROM yourtable
        WHERE parentid IS NULL
        LIMIT 3
      ) AS bar
  )AS foo
  ORDER BY parentid) AS buz;