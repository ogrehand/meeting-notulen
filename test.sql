

create table meeting(
    id integer, title varchar, date timestamp, location varchar, inisiator varchar, note_taker varchar, meeting_status meeting_status, former_id integer
    )



    CREATE TABLE meeting (
    id integer primary key,
    title character varying,
    date timestamp without time zone,
    location character varying,
    inisiator character varying,
    note_taker character varying,
    meeting_status public.meeting_status,
    former_id integer
);


ALTER TABLE public.meeting OWNER TO postgres;

--
-- Name: participant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE participant (
    id integer primary key,
    name character varying,
    email character varying
);


ALTER TABLE public.participant OWNER TO postgres;

--
-- PostgreSQL database dump complete
--


create table meeting_participant(meeting_id integer references meeting(id), participant_id integer references participant(id), attendance_status boolean, signature varchar);