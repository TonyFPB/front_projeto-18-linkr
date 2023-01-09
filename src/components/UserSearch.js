import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledSearchTimeline, StyledTimeline } from "../assets/TimelineStyles";
import { StyledSearch } from "../assets/HeaderStyles";
import Timeline from "../pages/Timeline";

export default function UserSearch({ mobile, setUserSelected }) {
  const [name, setName] = useState("");
  const [resultsPeople, setResultsPeople] = useState([]);
  const [timelineUserSelected, setTimeLineUserSelected] = useState([]);
  let nameSearch = name;
  const navigate = useNavigate();

  function getheader() {
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return header;
  }

  async function searchPeople(nameSearch) {
    setName(nameSearch);

    if (!nameSearch) {
      setResultsPeople([]);
      return;
    }

    const header = getheader();

    const url = `${process.env.REACT_APP_URL_API}/user-by-name/${nameSearch}`;

    try {
      await axios
        .get(url, { headers: header })
        .then((response) => {
          setResultsPeople(response.data);
          //navigate("/home");
        })
        .catch((erro) => alert(erro.response.data.message));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  async function searchPeopleByid(idUser) {
    const header = getheader();

    try {
      const url = `${process.env.REACT_APP_URL_API}/user/${idUser}`;
      await axios.get(url, { headers: header }).then((response) => {
        console.log("timeline =", response.data);
        console.log("timeline.user =", response.data.user.id);
        setTimeLineUserSelected(response.data);
        setUserSelected(response.data)
        setResultsPeople([]);
      });
    } catch (error) {}
  }

  function showResultsPeople() {
    return (
      <>
        {resultsPeople.length !== 0 && (
          <SearchResults>
            <ul>
              {resultsPeople.map((r) => {
                return (
                  <li key={r.id} onClick={(e) => searchPeopleByid(r.id)}>
                    <img src={r.image} />
                    {r.name}
                  </li>
                );
              })}
            </ul>
          </SearchResults>
        )}
      </>
    );
  }

  return (
    <>
      {mobile === true ? (
        <StyledSearchTimeline>
          <AiOutlineSearch onClick={() => searchPeople(nameSearch)} />
          <DebounceInput
            placeholder="Search for people"
            minLength={3}
            debounceTimeout={300}
            value={name}
            // type="name"
            onChange={(e) => {
              nameSearch = e.target.value;
              searchPeople(nameSearch);
            }}
            onKeyUp={(e) => (nameSearch = e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                nameSearch = e.target.value;
                searchPeople(nameSearch);
              }
            }}
          />
        </StyledSearchTimeline>
      ) : (
        <StyledSearch>
          <AiOutlineSearch onClick={() => searchPeople(nameSearch)} />
          <DebounceInput
            placeholder="Search for people"
            minLength={3}
            debounceTimeout={300}
            value={name}
            // type="name"
            onChange={(e) => {
              nameSearch = e.target.value;
              searchPeople(nameSearch);
            }}
            onKeyUp={(e) => (nameSearch = e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                nameSearch = e.target.value;
                searchPeople(nameSearch);
              }
            }}
          />
        </StyledSearch>
      )}

      {mobile === true
        ? resultsPeople.length !== 0 && (
            <SearchResultsMobile>
              <ul>
                {resultsPeople.map((r) => {
                  return (
                    <li key={r.id} onClick={(e) => searchPeopleByid(r.id)}>
                      <img src={r.image} />
                      {r.name}
                    </li>
                  );
                })}
              </ul>
            </SearchResultsMobile>
          )
        : resultsPeople.length !== 0 && (
            <SearchResults>
              <ul>
                {resultsPeople.map((r) => {
                  return (
                    <li key={r.id} onClick={(e) => searchPeopleByid(r.id)}>
                      <img src={r.image} />
                      {r.name}
                    </li>
                  );
                })}
              </ul>
            </SearchResults>
          )}
    </>
  );
}

const SearchResults = styled.div`
  position: absolute;
  top: 58px;
  width: 38.5%;
  // width: 32vw;
  padding: 0 0 0 17px;
  /* margin-left: 17px;
  margin-right: 17px; */
  background: #e7e7e7;
  border-radius: 0px 0px 8px 8px;
  border: none;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  /* identical to box height */

  color: #515151;

  ul {
    width: 100%;
    padding-left: 17px;
    padding-top: 14px;
    cursor: pointer;

    li {
      padding-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 12px;

      img {
        width: 39px;
        height: 39px;
        border-radius: 100%;
      }
    }
  }
  @media (max-width: 896px) {
    display: none;
  }
`;

const SearchResultsMobile = styled.div`
  display: none;
  padding: 0 0 0 17px;
  margin-left: 17px;
  margin-right: 17px;
  background: #e7e7e7;
  border-radius: 0px 0px 8px 8px;
  border: none;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  /* identical to box height */

  color: #515151;

  ul {
    padding-left: 17px;
    padding-top: 14px;
    /* padding-bottom: 23px; */
    cursor: pointer;

    li {
      padding-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 12px;

      img {
        width: 39px;
        height: 39px;
        border-radius: 100%;
      }
    }
  }
  @media (max-width: 896px) {
    display: block;
  }
`;
