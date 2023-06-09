import React, { Component } from "react";
import Loading from "./components/atoms/Loading";
import CardNotes from "./components/molecues/CardNotes";
import FormNote from "./components/molecues/SubHeaderNoteguh";
import { Grid, Container, SimpleGrid } from "@mantine/core";
import HeaderNoteguh from "./components/molecues/HeaderNoteguh";
import { getDataNotes, showFormattedDate, limitChar } from "./utils/data";
import Nodata from "./components/molecues/Nodata";

class Noteguh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNotes: getDataNotes(),
      dataArchive: [],
      loading: false,
      showNote: true,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onChangeNoteArchive = this.onChangeNoteArchive.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ test: !this.state.loading });
    }, 1250);
  }

  renderDiv() {
    if (this.state.test) {
      return <></>;
    } else {
      return <Loading />;
    }
  }

  onDeleteHandler(id) {
    if (this.state.showNote) {
      const dataNotes = this.state.dataNotes.filter((contact) => contact.id !== id);
      this.setState({ dataNotes });
    } else {
      const dataArchive = this.state.dataArchive.filter((contact) => contact.id !== id);
      this.setState({ dataArchive });
    }
  }

  onArchiveHandler(id) {
    if (this.state.showNote !== false) {
      const newArchive = this.state.dataNotes.filter((contact) => contact.id === id);
      this.setState({ dataArchive: this.state.dataArchive.concat(newArchive) });
    } else {
      const newNotes = this.state.dataArchive.filter((contact) => contact.id === id);
      this.setState({ dataNotes: this.state.dataNotes.concat(newNotes) });
    }
  }

  onChangeNoteArchive(changes) {
    this.setState({ showNote: changes });
  }

  onSearchChangeHandler(e) {
    const searchResult = this.state.dataNotes.filter((search) =>
      search.title.includes(e.target.value)
    );
    this.setState({ dataNotes: searchResult });
  }

  onSubmitEventHandler({ title, body }) {
    const date = JSON.stringify(new Date(), null, 2);
    const createdAt = date.slice(1, -1);
    this.setState((prevState) => {
      return {
        dataNotes: [...prevState.dataNotes, { id: +new Date(), title, body, createdAt }],
      };
    });

    console.log({ id: +new Date(), title, body, dateTime: new Date() });
  }

  render() {
    const { dataNotes, showNote, dataArchive } = this.state;

    return (
      <>
        {this.renderDiv()}

        <Container>
          <HeaderNoteguh showNote={showNote} onChangeNoteArchive={this.onChangeNoteArchive} />
          <FormNote onSearch={this.onSearchChangeHandler} onSubmit={this.onSubmitEventHandler} />
          <SimpleGrid
            breakpoints={[
              { maxWidth: "62rem", cols: 3, spacing: "md" },
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}
            cols={4}
            spacing="lg">
            {showNote && dataNotes.length >= 1 ? (
              dataNotes.map((note, index) => (
                <div key={index}>
                  <CardNotes
                    id={note.id}
                    {...note}
                    limitChar={limitChar}
                    showFormattedDate={showFormattedDate}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                  />
                </div>
              ))
            ) : !showNote && dataArchive.length <= 0 ? (
              <Nodata message={"Data Archive Kosong ayo buat"} />
            ) : !showNote && dataNotes.length >= 1 ? (
              dataArchive.map((note, index) => (
                <div>
                  <CardNotes
                    id={note.id}
                    {...note}
                    limitChar={limitChar}
                    showNote={showNote}
                    showFormattedDate={showFormattedDate}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                  />
                </div>
              ))
            ) : !showNote && dataArchive.length > 0 && dataNotes.length < 1 ? (
              dataArchive.map((note, index) => (
                <div>
                  <CardNotes
                    id={note.id}
                    {...note}
                    limitChar={limitChar}
                    showNote={showNote}
                    showFormattedDate={showFormattedDate}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                  />
                </div>
              ))
            ) : (
              <Nodata message={"Data Catatan Kosong ayo buat"} />
            )}
          </SimpleGrid>
        </Container>
      </>
    );
  }
}
export default Noteguh;
