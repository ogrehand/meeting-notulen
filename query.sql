//1
select * from content a
join meeting b on b.id = a.meeting_id
where lower(a.discussion) like 'akademik'

//2
select * from action a 
join participant b on b.id = a.pic 
where b.id = 6;

//3
select * from meeting
where date between '2023-08-10' and '2023-09-10';